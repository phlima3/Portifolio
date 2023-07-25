import React, { ReactNode } from "react";
import { Flex, useMediaQuery } from "@chakra-ui/react";

export const SkillsContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isMobile] = useMediaQuery("(max-width: 1080px)");

  return (
    <Flex
      gap={4}
      align="center"
      justify="center"
      direction={isMobile ? "column" : "row"}
      w="100%"
    >
      {children}
    </Flex>
  );
};
