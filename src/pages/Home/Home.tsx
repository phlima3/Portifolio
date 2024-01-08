import {
  Box,
  Flex,
  Text,
  useMediaQuery,
  Link,
  Divider,
} from "@chakra-ui/react";
import { ContainerMain } from "../../components/Container/ContainerHome";
import { Header } from "../../components/Header";
import Mouse from "../../components/Icons/Mouse";
import LogoReact from "../../components/Icons/logoReact";
import { Hello } from "./Hello/Hello";
import { Eu } from "../../components/Icons/Eu";
import "./home.css";
import { GithubIcon } from "../../components/Icons/Github";
import { Email } from "../../components/Icons/Email";
import { Linkedin } from "../../components/Icons/Linkedin";
import { MyDates } from "../../components/MyDates";
import { motion, useScroll } from "framer-motion";

import { SkillsBack, SkillsDevops, SkillsFront } from "../../components/Skills";

import { SkillsContainer } from "../../components/Skills/SkillsContainer";

import { ContainerTop } from "../../components/Container/ContainerTop";

export const Home = () => {
  const [largerThan1366] = useMediaQuery("(min-width: 768px)");
  const [isMobile] = useMediaQuery("(max-width: 1080px)");

  const { scrollYProgress } = useScroll();

  const experience = [
    {
      date: "2017",
      description:
        "Meu primeiro contato com programação começou na escola SESI, onde participei da turma de robótica. Juntos, competimos em diversos torneios nacionais durante o ensino fundamental.",
    },
    {
      date: "2021",
      description:
        "Fui convidado pelo professor de robótica a me inscrever no curso técnico em Desenvolvimento de Sistemas. Passei na seleção e mergulhei ainda mais no estudo da programação.",
    },
    {
      date: "2022",
      description:
        "No curso, conheci uma Startup local em busca de jovens talentos em programação. Embora minha tentativa de vaga no Back-end não tenha sido bem-sucedida, logo em seguida consegui um estágio na área de Front-end. Durante esse estágio, direcionei meus objetivos e me desenvolvi ao realizar as atividades ao longo do ano.",
    },
    {
      date: "2023",
      description:
        "Mesmo após ser demitido no começo do ano, não desisti. Continuei estudando e me aprimorando. Então, outro professor do curso técnico me convidou para um projeto freelance, e foi nele em que me descobri no desenvolvimento mobile. Desde então, venho me dedicando a essa área e me aprimorando cada vez mais.",
    },
    {
      date: "2024",
      description:
        "Hoje, sou desenvolvedor fullstack, com foco em mobile. Tenho como objetivo me tornar um desenvolvedor sênior e, futuramente, me tornar um empreendedor.",
    },
  ];

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar"
      />
      <ContainerTop />

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
                Fullstack Developer
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
            <Flex direction="column" gap={4} my="80px" id="sobre">
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

          <Flex
            w="100%"
            justify="center"
            align="center"
            direction="column"
            id="skills"
          >
            <Text fontWeight={700} color="text.white" fontSize={20}>
              Minhas Skills
            </Text>
            <Text
              fontWeight={500}
              color="text.secondary"
              fontSize={14}
              mb="80px"
              px={4}
              textAlign="center"
            >
              Aqui estão algumas das tecnologias que eu uso no meu dia a dia
            </Text>
            <Flex
              direction="column"
              gap={6}
              w="100%"
              justifyContent="center"
              alignItems="center"
            >
              <SkillsContainer>
                <SkillsFront />
              </SkillsContainer>
              <SkillsContainer>
                <SkillsBack />
              </SkillsContainer>

              <SkillsContainer>
                <SkillsDevops />
              </SkillsContainer>
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
