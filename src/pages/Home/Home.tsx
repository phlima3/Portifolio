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
import { Hello } from "./Hello/Hello";

export const Home = () => {
  const [isMobile] = useMediaQuery("(max-width: 767px)");

  return (
    <ContainerMain>
      <Header />
      <Hello />
    </ContainerMain>
  );
};
