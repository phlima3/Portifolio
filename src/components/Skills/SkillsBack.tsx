import {
  Box,
  Flex,
  Text,
  useMediaQuery,
  Link,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { Skills } from "./Skill";

import * as Icons from "../../components/Icons/devIcons";

export const SkillsBack = () => {
  const backEnd = [
    {
      name: "Node",
      icon: <Icons.Node fill="#fff" />,
    },
    {
      name: "Express",
      icon: <Icons.Express fill="#fff" />,
    },
    {
      name: "MySQL",
      icon: <Icons.MySQL fill="#fff" />,
    },

    {
      name: "C#",
      icon: <Icons.csharp fill="#fff" />,
    },
    {
      name: "Laravel",
      icon: <Icons.Laravel fill="#fff" />,
    },
    {
      name: "PHP",
      icon: <Icons.PHP fill="#fff" />,
    },
    {
      name: "C",
      icon: <Icons.CIcon fill="#fff" />,
    },
    {
      name: "Spring",
      icon: <Icons.Spring fill="#fff" />,
    },
    { name: "Java", icon: <Icons.Java fill="#fff" /> },
    { name: "MongoDB", icon: <Icons.MongoDB fill="#fff" /> },
  ];

  return (
    <>
      <Text fontWeight={600} color="text.white" fontSize={20}>
        Back-End
      </Text>
      <Skills skills={backEnd} skillType="Back end" />
    </>
  );
};
