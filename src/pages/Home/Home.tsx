import {
  Box,
  Flex,
  Image,
  Text,
  useMediaQuery,
  Center,
  useToast,
  Link,
  Divider,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { ContainerMain } from "../../components/Container/ContainerHome";
import { Header } from "../../components/Header";
import Logo48 from "../../components/Icons/Logo48";
import Mouse from "../../components/Icons/Mouse";
import LogoReact from "../../components/Icons/logoReact";
import { Hello } from "./Hello/Hello";
import Eu from "../../components/Icons/Eu";
import "./home.css";
import logo from "/LogoPedro.png";
import { GithubIcon } from "../../components/Icons/Github";
import { Email } from "../../components/Icons/Email";
import { Linkedin } from "../../components/Icons/Linkedin";

import * as Icons from "../../components/Icons/devIcons";
import { MyDates } from "../../components/MyDates";
import { motion, useAnimation, useScroll } from "framer-motion";
import { animationCenter, MotionFlex } from "../../theme/animation";
import { useFollowPointer } from "../../hooks/use-follow-pointer";
import { Toast } from "../../components/Toast";
import { Skills } from "../../components/Skills";
export const Home = () => {
  const [largerThan1366] = useMediaQuery("(min-width: 768px)");
  const [isMobile] = useMediaQuery("(max-width: 1080px)");

  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  const { scrollYProgress } = useScroll();

  const [isRotating, setIsRotating] = useState(false);
  const controls = useAnimation();
  const toast = useToast();

  useEffect(() => {
    const isMobileNotChakra = window.innerWidth < 1080;

    if (!isMobileNotChakra) {
      toast({
        duration: 4000,
        isClosable: true,
        render: () => (
          <Flex
            color="#FB3640"
            w="100%"
            display={isMobile ? "none" : "flex"}
            alignItems="center"
            justifyContent="center"
          >
            Experimente clicar na logo ;)
          </Flex>
        ),
      });
    }
  }, [isMobile]);

  useEffect(() => {
    if (isRotating) {
      controls.start({
        rotate: 360,
        transition: { duration: 2 },
      });
    }
  }, [controls, isRotating]);

  const experience = [
    {
      date: "2017",
      description:
        "Foi meu primeiro contato com a programação, onde entrei para a turma de robótica na escola SESI, participamos de diversos torneios nacionais, e fiquei lá por 4 anos.",
    },
    {
      date: "2021",
      description:
        "Fui convidado pelo meu professor de robótica para se inscrever no curso técnico em Desenvolvimento de Sistemas. Consegui passar e comecei a estudar mais sobre programação. ",
    },
    {
      date: "2022",
      description:
        "No decorrer do curso conheci uma Startup aqui em minha cidade, onde procuravam jovens talentos na programação, foi aí que me candidatei a vaga para Back-end, sem muito sucesso, porém logo depois tive a oportunidade de fazer estágio na área de Front-end, onde direcionei meus objetivos e desenvolvi as atividades colocadas a mim durante o ano do estágio.",
    },
  ];

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
  ];
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
  ];
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
  ];

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar"
      />
      {isMobile && (
        <Center w="100%" h="100%" bg="background.primary.500">
          <Image src={logo} w="300px" loading="lazy" alt="logo-pedro" />
        </Center>
      )}
      <Center
        w="100%"
        h="100vh"
        bg="background.primary.500"
        display={isMobile ? "none" : "flex"}
      >
        <motion.div
          ref={ref}
          onClick={() => setIsRotating(!isRotating)}
          animate={{
            x,
            y,
            rotate: isRotating ? 360 : 0,
          }}
          transition={{
            type: "spring",
            damping: 2,
            stiffness: 30,
            restDelta: 0.001,
          }}
        >
          <Image
            src={logo}
            w="500px"
            h="500px"
            loading="lazy"
            alt="logo-pedro"
          />
        </motion.div>
      </Center>
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
          <Flex
            mt="200px"
            w="100%"
            justify="center"
            direction="column"
            alignItems="center"
          >
            <Eu />
            <Flex
              direction="column"
              align="center"
              justify="center"
              mt={10}
              mb={6}
            >
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
            <Flex gap={4}>
              <Link
                href="https://github.com/phlima3"
                isExternal
                cursor="pointer"
              >
                <GithubIcon fill="#FB3640" />
              </Link>
              <Link
                href="mailto:pedrolima3dev@gmail.com"
                isExternal
                cursor="pointer"
              >
                <Email fill="#FB3640" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/pedro-henrique-dos-santos-lima-95b26821b/"
                isExternal
                cursor="pointer"
              >
                <Linkedin fill="#FB3640" />
              </Link>
            </Flex>
            <Flex direction="column" gap={4} my="80px">
              {experience.map((item) => (
                <MyDates
                  key={item.date}
                  date={item.date}
                  description={item.description}
                />
              ))}
            </Flex>
          </Flex>

          <Flex w="100%" justify="center" h="100%" align="center" mb="80px">
            <Divider
              orientation="horizontal"
              borderColor="text.secondary"
              w={{
                start: "90%",
                md: "50%",
              }}
            />
          </Flex>

          <Flex w="100%" justify="center" align="center" direction="column">
            <Text fontWeight={700} color="text.white" fontSize={20}>
              Minhas Skills
            </Text>
            <Text
              fontWeight={500}
              color="text.secondary"
              fontSize={14}
              mb="80px"
            >
              Aqui estão algumas das tecnologias que eu uso no meu dia a dia
            </Text>
            <Flex direction="column" gap={6}>
              <Flex gap={4} align="center">
                <Text fontWeight={600} color="text.white" fontSize={20}>
                  Front-end
                </Text>
                <Skills skills={frontEnd} skillType="Front end" />
              </Flex>
              <Flex gap={4} align="center">
                <Text fontWeight={600} color="text.white" fontSize={20}>
                  Back-end
                </Text>
                <Skills skills={backEnd} skillType="Back end" />
              </Flex>
              <Flex gap={4} align="center">
                <Text pl={4} fontWeight={600} color="text.white" fontSize={20}>
                  DevOps
                </Text>
                <Skills skills={devops} skillType="Dev ops" />
              </Flex>
            </Flex>
          </Flex>
          <Flex w="100%" justify="center" h="100%" align="center" my="80px">
            <Divider
              orientation="horizontal"
              borderColor="text.secondary"
              w={{
                start: "90%",
                md: "50%",
              }}
            />
          </Flex>
        </Box>
      </ContainerMain>
    </>
  );
};
