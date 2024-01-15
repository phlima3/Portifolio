import {
  Flex,
  Image,
  useMediaQuery,
  Center,
  useToast,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { useEffect, useMemo, useRef, useState } from "react";
import "../../pages/Home/home.css";
import logo from "../../assets/logo.png";
import { motion, useAnimation } from "framer-motion";
import { useFollowPointer } from "../../hooks/use-follow-pointer";

import * as Fa from "react-icons/fa";

export const ContainerTop = () => {
  const [isMobile] = useMediaQuery("(max-width: 1080px)");
  const controls = useAnimation();
  const toast = useToast();
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  const [isRotating, setIsRotating] = useState(false);
  const [toastVisible, setToastVisible] = useState(true);

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
    const isMobileDevice = window.innerWidth < 1080;

    if (!isMobileDevice && toastVisible) {
      toast({
        duration: 3000,
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
          </>
        ),
      });
    }
  }, [isMobile, toast, toastVisible]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setToastVisible(false);
      } else {
        setToastVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isRotating) {
      controls.start({
        rotate: 360,
        transition: { duration: 2 },
      });
    }
  }, [controls, isRotating]);

  const handleScrollDown = () => {
    window.scrollBy({ top: 680, behavior: "smooth" }); // ajuste o valor de top conforme necessário
  };

  return (
    <>
      {isMobile ? (
        <Center w="100%" h="100%" bg="background.primary.500">
          <Image src={logo} w="300px" loading="lazy" alt="logo-pedro" />
        </Center>
      ) : (
        <Center w="100%" h="100vh" bg="background.primary.500" display="flex">
          {rotatingDiv}
          {toastVisible && (
            <IconButton
              icon={<Fa.FaArrowDown />}
              onClick={handleScrollDown}
              colorScheme="red"
              aria-label="Arrow Down"
              size="lg"
              color="text.white"
              position="fixed"
              bottom="20px"
              right="20px"
            />
          )}
        </Center>
      )}
    </>
  );
};
