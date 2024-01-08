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

export const SkillsDevops = () => {
  const devops = [
    {
      name: "Git",
      icon: <Icons.Git fill="#fff" />,
    },
    {
      name: "GraphQL",
      icon: <Icons.GraphQL fill="#fff" />,
    },
    {
      name: "Docker",
      icon: <Icons.Docker fill="#fff" />,
    },
    {
      name: "Jest",
      icon: <Icons.Jest fill="#fff" />,
    },
    {
      name: "Ubuntu",
      icon: <Icons.Ubuntu fill="#fff" />,
    },
    {
      name: "AWS",
      icon: <Icons.Amazon fill="#fff" />,
    },
  ];

  return (
    <>
      <Text marginRight={6} fontWeight={600} color="text.white" fontSize={20}>
        Outros
      </Text>
      <Skills skills={devops} skillType="Dev ops" />
    </>
  );
};
