import { Flex, Image, useMediaQuery, Center, useToast } from "@chakra-ui/react";
import { useEffect, useMemo, useRef, useState } from "react";
import "../../pages/Home/home.css";
import logo from "../../assets/logo.png";
import { motion, useAnimation } from "framer-motion";
import { useFollowPointer } from "../../hooks/use-follow-pointer";

export const ContainerTop = () => {
  const [isMobile] = useMediaQuery("(max-width: 1080px)");
  const controls = useAnimation();
  const toast = useToast();
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  const [isRotating, setIsRotating] = useState(false);

  const rotatingDiv = useMemo(
    () => (
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
          damping: 3,
          stiffness: 30,
          restDelta: 0.001,
        }}
      >
        <Image src={logo} w="500px" h="500px" loading="lazy" alt="logo-pedro" />
      </motion.div>
    ),
    [x, y, isRotating]
  );

  useEffect(() => {
    const isMobileNotChakra = window.innerWidth < 1080;

    if (!isMobileNotChakra) {
      toast({
        duration: 4000,
        isClosable: true,
        render: () => (
          <>
            <Flex
              color="#FB3640"
              w="100%"
              display={isMobile ? "none" : "flex"}
              alignItems="center"
              justifyContent="center"
            >
              Experimente clicar na logo!
            </Flex>
            <Flex
              color="#FB3640"
              w="100%"
              display={isMobile ? "none" : "flex"}
              alignItems="center"
              justifyContent="center"
              textAlign={isMobile ? "center" : "left"}
            >
              <p
                style={{
                  textAlign: "center",
                }}
              >
                Ou se quiser, pode fazer o scroll para baixo e conhecer um pouco
                mais sobre mim!
              </p>
            </Flex>
          </>
        ),
      });
    }
  }, [isMobile]);

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
      {isMobile ? (
        <Center w="100%" h="100%" bg="background.primary.500">
          <Image src={logo} w="300px" loading="lazy" alt="logo-pedro" />
        </Center>
      ) : (
        <Center w="100%" h="100vh" bg="background.primary.500" display="flex">
          {rotatingDiv}
        </Center>
      )}
    </>
  );
};
