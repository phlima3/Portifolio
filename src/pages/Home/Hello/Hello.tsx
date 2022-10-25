import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";

export const Hello = () => {
  const [isMobile] = useMediaQuery("(max-width: 767px)");
  return (
    <Flex mt={isMobile ? "150px" : "150px"} direction="column">
      {isMobile ? (
        <>
          <Text
            textAlign="center"
            fontWeight={800}
            fontSize={40}
            color="text.white"
            maxH="40px"
          >
            Olá me chamo
          </Text>
          <Text
            textAlign="center"
            fontWeight={800}
            fontSize={40}
            color="background.secondary.500"
          >
            Pedro Lima
          </Text>
          <Text
            px={8}
            mt={2}
            textAlign="center"
            fontWeight={400}
            fontSize={14}
            color="text.primary"
          >
            Sou desenvolvedor Front-end focado em plataforma web, 100%
            atualizado nas tecnologias da atualidade e evoluindo igual a um
            foguete!
          </Text>
        </>
      ) : (
        <Box ml="72px" maxW="600px">
          <Text
            textAlign="start"
            fontWeight={400}
            fontSize={18}
            color="text.secondary"
          >
            Olá, Tudo bem?
          </Text>
          <Text
            textAlign="start"
            fontWeight={900}
            fontSize={40}
            color="text.white"
          >
            Sou Pedro Lima
          </Text>
          <Text
            textAlign="start"
            fontWeight={300}
            fontSize={18}
            color="text.secondary"
          >
            Desenvolvedor front-end focado em tirar suas ideias do papel para o
            mercado...
          </Text>
        </Box>
      )}
    </Flex>
  );
};
