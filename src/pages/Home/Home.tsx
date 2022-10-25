import {
  Box,
  Flex,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ContainerMain } from "../../components/Container/ContainerHome";
import { Header } from "../../components/Header";
import Logo48 from "../../components/Icons/Logo48";
import Mouse from "../../components/Icons/Mouse";
import LogoReact from "../../components/Icons/LogoReact";
import { Hello } from "./Hello/Hello";
import Eu from "../../components/Icons/eu";

export const Home = () => {
  const [largerThan1366] = useMediaQuery("(min-width: 768px)");
  const [isMobile] = useMediaQuery("(max-width: 767px)");

  return (
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
  );
};
