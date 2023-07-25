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

export const SkillsFront = () => {
  const frontEnd = [
    {
      name: "React",
      icon: <Icons.ReactIcon fill="#fff" />,
    },
    {
      name: "Next",
      icon: <Icons.Next fill="#fff" />,
    },
    {
      name: "HTML",
      icon: <Icons.HTML fill="#fff" />,
    },
    {
      name: "CSS",
      icon: <Icons.CSS fill="#fff" />,
    },
    {
      name: "TypeScript",
      icon: <Icons.Typescript fill="#fff" />,
    },
    {
      name: "JavaScript",
      icon: <Icons.Javascript fill="#fff" />,
    },
    {
      name: "Redux",
      icon: <Icons.Redux fill="#fff" />,
    },
    {
      name: "React Native",
      icon: <Icons.ReactIcon fill="#fff" />,
    },
    {
      name: "Electron",
      icon: <Icons.Electron fill="#fff" />,
    },
    {
      name: "Angular",
      icon: <Icons.Angular fill="#fff" />,
    },
    {
      name: "Vue",
      icon: <Icons.Vue fill="#fff" />,
    },
    { name: "Sass", icon: <Icons.SASS fill="#fff" /> },
    { name: "Bootstrap", icon: <Icons.Bootstrap fill="#fff" /> },
    { name: "Storybook", icon: <Icons.Storybook fill="#fff" /> },
    { name: "Tailwind", icon: <Icons.Tailwind fill="#fff" /> },
    { name: "Figma", icon: <Icons.Figma fill="#fff" /> },
    { name: "Material", icon: <Icons.Material fill="#fff" /> },
  ];

  return (
    <>
      <Text fontWeight={600} color="text.white" fontSize={20}>
        Front-end
      </Text>
      <Skills skills={frontEnd} skillType="Front end" />
    </>
  );
};
