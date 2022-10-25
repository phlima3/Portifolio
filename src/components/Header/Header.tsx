import { Flex, useMediaQuery, Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo48 from "../Icons/Logo48";

export const Header = () => {
  const [isMobile] = useMediaQuery("(max-width: 767px)");

  return (
    <Flex
      w="100%"
      minH="96px"
      align="center"
      justify={isMobile ? "center" : "space-around"}
    >
      <Logo48 />

      {!isMobile && (
        <Flex gap={6}>
          <Link to="#sobre">
            <Text color="text.secondary">Sobre mim</Text>
          </Link>
          <Link to="#skills">
            <Text color="text.secondary">Minhas skills</Text>
          </Link>
          <Link to="#projetos">
            <Text color="text.secondary">Projetos</Text>
          </Link>
          <Link to="#lets-go-work">
            <Text color="text.secondary">Vamos Trabalhar juntos</Text>
          </Link>
        </Flex>
      )}
    </Flex>
  );
};
