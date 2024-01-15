import {
  Box,
  Flex,
  Text,
  useMediaQuery,
  Link,
  Divider,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
  Button,
  IconButton,
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

import * as Fa from "react-icons/fa";

import { SkillsBack, SkillsDevops, SkillsFront } from "../../components/Skills";

import { SkillsContainer } from "../../components/Skills/SkillsContainer";

import { ContainerTop } from "../../components/Container/ContainerTop";
import { useEffect, useState } from "react";

import { Projects, ProjectI } from "../../components/Projects/index";
import { useForm } from "react-hook-form";

export const Home = () => {
  const [largerThan1366] = useMediaQuery("(min-width: 768px)");
  const [isMobile] = useMediaQuery("(max-width: 1080px)");

  const { scrollYProgress } = useScroll();

  const [scrollYValue, setScrollYValue] = useState(0);

  const [toastVisible, setToastVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = scrollY / totalHeight;
      setScrollYValue(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
  useEffect(() => {
    document.title = `Pedro Lima | ${(scrollYValue * 100).toFixed(2)}%`;
  }, [scrollYValue]);

  const projects: ProjectI[] = [
    {
      description:
        "Stay Online é um projeto que visa desenvolver uma Rede Social para programadores. O projeto foi apenas um teste para aprimorar meus conhecimentos em React Native",
      image: "https://picsum.photos/200/300",
      name: "Stay Online",
      technologies: ["React Native", "TailwindCSS", "Redux", "Firebase"],
      url: "https://github.com/phlima3/prjStayOnline",
    },
    {
      description:
        "O projeto foi desenvolvido para aprimorar meus conhecimentos em React Native e Typescript. O projeto consiste em um aplicativo de receitas, onde o usuário pode pesquisar por receitas, favoritar e ver os detalhes de cada uma.",
      image: "https://picsum.photos/200/300",
      name: "Recipes",
      technologies: ["React Native", "Typescript", "Redux", "Firebase"],
      url: "",
    },
    {
      description:
        "O projeto foi desenvolvido em dois sistemas, um em Angular e outro em React Native. Consiste em um sistema completo de gerenciamento para a empesa, onde é realizado todo o CRUD de talhoes, colheitas, funcionarios, maquinas, etc.",
      image: "https://picsum.photos/200/300",
      name: "AS Resinas Freelance",
      technologies: [
        "React Native",
        "Angular",
        "Typescript",
        "Redux",
        "Firebase",
      ],
      url: "",
    },
    {
      description:
        "O projeto Bebe Cresci foi um freelance que desenvolvi para uma empresa local. O projeto consiste em uma dashboard para a empresa que faz compra e venda de produtos infantis.",
      image: "https://picsum.photos/200/300",
      name: "Bebe Cresci Freelance",
      technologies: ["React JS", "Typescript", "Redux", "Firebase"],
      url: "",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(data) {
    console.log(data);

    window.open(
      `https://api.whatsapp.com/send?phone=5515998601308&text=Ol%C3%A1%2C%20meu%20nome%20%C3%A9%20${data.name}%2C%20${data.message}`,
      "_blank"
    );
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setToastVisible(false);
      } else {
        setToastVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

          <Flex
            w="100%"
            justify="center"
            align="center"
            direction="column"
            id="projetos"
          >
            <Text fontWeight={700} color="text.white" fontSize={20}>
              Meus projetos
            </Text>
            <Text
              fontWeight={500}
              color="text.secondary"
              fontSize={14}
              mb="80px"
              px={4}
              textAlign="center"
            >
              Confira abaixo alguns de meus projetos pessoais!
            </Text>

            <Flex
              gap={6}
              w="100%"
              justifyContent="center"
              alignItems="center"
              wrap="wrap"
              px={4}
            >
              {projects.map((project) => (
                <Projects
                  description={project.description}
                  image={project.image}
                  name={project.name}
                  technologies={project.technologies}
                  url={project.url}
                />
              ))}
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
          <Flex
            w="100%"
            justify="center"
            align="center"
            direction="column"
            id="form"
          >
            <Text
              fontWeight={700}
              color="text.white"
              fontSize={20}
              textAlign="center"
            >
              Ta afim de desenvolver um projeto comigo?
            </Text>
            <Text
              fontWeight={500}
              color="text.secondary"
              fontSize={14}
              mb="80px"
              px={4}
              textAlign="center"
            >
              Entre em contato e bora tirar essa ideia do papel! <br /> Este
              formulário vai te redirecionar para meu Whats App e lá vamos
              conversar melhor sobre seu projeto!
            </Text>

            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{
                width: "100%",
                maxWidth: "500px",
                paddingBottom: "80px",
                paddingRight: "20px",
                paddingLeft: "20px",
              }}
            >
              <FormControl isInvalid={errors.name}>
                <FormLabel htmlFor="name" textColor="text.white">
                  Seu nome
                </FormLabel>
                <Input
                  id="name"
                  borderColor="text.secondary"
                  background="background.primary.400"
                  placeholder="Seu nome"
                  _placeholder={{
                    color: "text.secondary",
                  }}
                  textColor={"text.white"}
                  {...register("name", {
                    required: "Campo obrigatório",
                  })}
                />
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.message} mt={4}>
                <FormLabel htmlFor="message" textColor="text.white">
                  Sua mensagem
                </FormLabel>
                <Textarea
                  id="message"
                  borderColor="text.secondary"
                  background="background.primary.400"
                  placeholder="Sua mensagem"
                  _placeholder={{
                    color: "text.secondary",
                  }}
                  textColor={"text.white"}
                  {...register("message", {
                    required: "Campo obrigatório",
                  })}
                />
                <FormErrorMessage>
                  {errors.message && errors.message.message}
                </FormErrorMessage>
              </FormControl>
              <Button
                mt={4}
                colorScheme="red"
                isLoading={isSubmitting}
                type="submit"
                w="100%"
              >
                Enviar
              </Button>
            </form>
          </Flex>
        </Box>
      </ContainerMain>
      {!toastVisible && (
        <IconButton
          icon={<Fa.FaArrowUp />}
          onClick={scrollToTop}
          colorScheme="red"
          aria-label="Arrow Down"
          size="lg"
          color="text.white"
          position="fixed"
          bottom="20px"
          right="20px"
        />
      )}
    </>
  );
};
