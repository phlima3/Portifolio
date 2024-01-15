import React from "react";
import { Link } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/react";

export interface ProjectI {
  name: string;
  description: string;
  image: string;
  url: string;
  technologies: string[];
}

export const Projects = ({
  name,
  description,
  image,
  url,
  technologies,
}: ProjectI) => {
  return (
    <a
      href={url}
      style={{
        textDecoration: "none",
        color: "black",
      }}
      target="_blank"
    >
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        backgroundColor="white"
        borderRadius="8px"
        padding="1rem"
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.25)"
        background="#2b2b2b"
        minW={{ start: "100%", md: "min-content" }}
        maxW={{ start: "100%", md: "min-content" }}
        height="100%"
        transition="0.3s"
        _hover={{
          transform: "scale(1.05)",
        }}
      >
        <Flex
          flexDirection="column"
          width="100%"
          textAlign="left"
          marginTop="1rem"
          wrap="wrap"
        >
          <Text
            align="left"
            fontWeight={700}
            color="text.white"
            fontSize={20}
            marginBottom="0.5rem"
          >
            {name}
          </Text>

          <Text
            fontWeight={500}
            color="text.secondary"
            fontSize={14}
            textAlign="left"
          >
            {description}
          </Text>

          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            marginTop="1rem"
            gap={4}
            wrap={{ start: "wrap", md: "nowrap" }}
            w={{ start: "100%", md: "min-content" }}
          >
            {technologies.map((technology) => (
              <Text
                backgroundColor="background.secondary.500"
                paddingY={1}
                paddingX={2}
                borderRadius={6}
                color="text.white"
              >
                {technology}
              </Text>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </a>
  );
};
