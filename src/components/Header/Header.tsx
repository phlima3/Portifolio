import { Flex, useMediaQuery, Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo48 from "../Icons/Logo48";

export const Header = () => {
  const [isMobile] = useMediaQuery("(max-width: 767px)");

  //

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
            <Text
              color="text.secondary"
              _hover={{
                color: "background.secondary.500",
                transition: "0.2s ease-in-out",
                transform: "translateY(-10px)",
                _after: {
                  width: "100%",
                  transition: "width 0.3s",
                },
              }}
              _after={{
                content: '""',
                display: "block",
                width: "0",
                height: "2px",
                backgroundColor: "background.secondary.500",
                transition: "width 0.3s",
              }}
            >
              Sobre mim
            </Text>
          </Link>
          <Link to="#skills">
            <Text
              color="text.secondary"
              _hover={{
                color: "background.secondary.500",
                transition: "0.2s ease-in-out",
                transform: "translateY(-10px)",
                _after: {
                  width: "100%",
                  transition: "width 0.3s",
                },
              }}
              _after={{
                content: '""',
                display: "block",
                width: "0",
                height: "2px",
                backgroundColor: "background.secondary.500",
                transition: "width 0.3s",
              }}
            >
              Minhas skills
            </Text>
          </Link>
          <Link to="#projetos">
            <Text
              color="text.secondary"
              _hover={{
                color: "background.secondary.500",
                transition: "0.2s ease-in-out",
                transform: "translateY(-10px)",
                _after: {
                  width: "100%",
                  transition: "width 0.3s",
                },
              }}
              _after={{
                content: '""',
                display: "block",
                width: "0",
                height: "2px",
                backgroundColor: "background.secondary.500",
                transition: "width 0.3s",
              }}
            >
              Projetos
            </Text>
          </Link>
          <Link to="#lets-go-work">
            <Text
              color="text.secondary"
              _hover={{
                color: "background.secondary.500",
                transition: "0.2s ease-in-out",
                transform: "translateY(-10px)",
                _after: {
                  width: "100%",
                  transition: "width 0.3s",
                },
              }}
              _after={{
                content: '""',
                display: "block",
                width: "0",
                height: "2px",
                backgroundColor: "background.secondary.500",
                transition: "width 0.3s",
              }}
            >
              Vamos Trabalhar juntos
            </Text>
          </Link>
        </Flex>
      )}
    </Flex>
  );
};
