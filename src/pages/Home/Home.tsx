import {
  Box,
  Flex,
  Grid,
  Image,
  GridItem,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useMediaQuery,
  Center,
  keyframes,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { ContainerMain } from "../../components/Container/ContainerHome";
import { Header } from "../../components/Header";
import Logo48 from "../../components/Icons/Logo48";
import Mouse from "../../components/Icons/Mouse";
import LogoReact from "../../components/Icons/logoReact";
import { Hello } from "./Hello/Hello";
import Eu from "../../components/Icons/Eu";
import "./home.css";
import logo from "/LogoPedro.png";
import { motion, useAnimation, useScroll } from "framer-motion";
import { animationCenter, MotionFlex } from "../../theme/animation";
import { useFollowPointer } from "../../hooks/use-follow-pointer";
import { Toast } from "../../components/Toast";

export const Home = () => {
  const [largerThan1366] = useMediaQuery("(min-width: 768px)");
  const [isMobile] = useMediaQuery("(max-width: 767px)");

  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  const { scrollYProgress } = useScroll();

  const [isRotating, setIsRotating] = useState(false);
  const controls = useAnimation();
  const toast = useToast();

  useEffect(() => {
    toast({
      duration: 4000,
      isClosable: true,
      render: () => <Box color="#FB3640">Experimente clicar na logo ;)</Box>,
    });
  }, []);

  useEffect(() => {
    if (isRotating) {
      controls.start({
        rotate: 360,
        transition: { duration: 2 },
      });
    }
  }, [controls, isRotating]);

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar"
      />
      <Center w="100%" h="100vh" bg="background.primary.500">
        <motion.div
          ref={ref}
          onClick={() => setIsRotating(!isRotating)}
          animate={{
            x,
            y,
            rotate: isRotating ? 360 : 0,
          }}
          transition={{
            type: "spring",
            damping: 2,
            stiffness: 30,
            restDelta: 0.001,
          }}
        >
          <Image src={logo} w="500px" h="500px" loading="lazy" />
        </motion.div>
        <Toast />
      </Center>
      <ContainerMain>
        <Header />
        <Box minH={{ start: "100vh", md: "100%" }}>
          <Flex
            w="100%"
            mt={{ md: "100px" }}
            align="center"
            justifyContent={{ start: "center", md: "space-evenly" }}
          >
            <Hello />
            {largerThan1366 && (
              <Box>
                <LogoReact />
              </Box>
            )}
          </Flex>
          {isMobile && (
            <Flex w="100%" align="center" justify="center" mt="80px">
              <Mouse />
            </Flex>
          )}

          {isMobile && (
            <Flex
              mt="200px"
              w="100%"
              justify="center"
              direction="column"
              alignItems="center"
            >
              <Eu />
              <Flex direction="column" align="center" justify="center" mt={10}>
                <Text fontWeight={700} color="text.white" fontSize={20}>
                  Pedro H. dos Santos Lima
                </Text>
                <Text fontWeight={500} color="text.secondary" fontSize={14}>
                  Téc. Desenvolvimento de sistemas
                </Text>
                <Text fontWeight={500} color="text.secondary" fontSize={14}>
                  Jr. Front-end Developer
                </Text>
              </Flex>
            </Flex>
          )}
        </Box>
      </ContainerMain>
    </>
  );
};
