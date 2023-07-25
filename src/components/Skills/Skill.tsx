import React, { useState } from "react";
import {
  Flex,
  Button,
  Modal,
  Text,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Tooltip,
  useMediaQuery,
  Icon,
  Box,
} from "@chakra-ui/react";

import { BiLogoReact } from "react-icons/bi";

import "./styles.css";

type Skill = {
  name: string;
  icon: React.ReactNode;
};

type SkillType = "Front end" | "Back end" | "Dev ops";

interface SkillsProps {
  skills: Skill[];
  skillType: SkillType;
}

export const Skills = ({ skills, skillType }: SkillsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 1080px)");

  const handleShowMore = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isMobile ? (
        <Flex direction="column" gap={4} w="100%" px={6}>
          {skills.slice(0, 5).map((skill) => (
            <Tooltip key={skill.name} label={skill.name} placement="top">
              <Flex
                p={2}
                w="100%"
                alignItems="center"
                justifyContent="center"
                bg="#2b2b2b"
                borderRadius="16px"
                transition="transform 0.2s"
                _hover={{
                  transform: "scale(1.1)",
                }}
              >
                <Text
                  color="white"
                  fontSize="xl"
                  fontWeight="bold"
                  textAlign="center"
                >
                  {skill.name}
                </Text>
              </Flex>
            </Tooltip>
          ))}
          {skills.length > 5 && (
            <Button
              onClick={handleShowMore}
              bg="background.primary.500"
              size="sm"
              transition="transform 0.2s"
              _hover={{
                bg: "background.primary.600",
                transform: "scale(1.1)",
              }}
              _active={{
                bg: "background.primary.700",
              }}
              p={2}
            >
              <Text fontSize="sm" as="span" color="white">
                Mostrar <br /> mais
              </Text>
            </Button>
          )}
        </Flex>
      ) : (
        <Flex gap={4} alignItems="center">
          {skills.slice(0, 5).map((skill) => (
            <Tooltip key={skill.name} label={skill.name} placement="top">
              <Flex
                p="20px"
                w="80px"
                h="80px"
                alignItems="center"
                justifyContent="center"
                bg="#2b2b2b"
                borderRadius="16px"
                transition="transform 0.2s"
                _hover={{
                  transform: "scale(1.1)",
                }}
              >
                {skill.icon}
              </Flex>
            </Tooltip>
          ))}
          {skills.length > 5 && (
            <Button
              onClick={handleShowMore}
              bg="background.primary.500"
              size="sm"
              transition="transform 0.2s"
              _hover={{
                bg: "background.primary.600",
                transform: "scale(1.1)",
              }}
              _active={{
                bg: "background.primary.700",
              }}
              p={2}
            >
              <Text fontSize="sm" as="span" color="white">
                Mostrar <br /> mais
              </Text>
            </Button>
          )}
        </Flex>
      )}

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent bg="background.primary.600">
          <ModalHeader>
            <Text color="white">Skills em {skillType}</Text>
          </ModalHeader>
          <ModalCloseButton top={4} className="modal-close-chakra" />

          <ModalBody p={4}>
            <Flex flexWrap="wrap" align="center" justify="center" gap={6}>
              {skills.map((skill) => (
                <Tooltip
                  key={skill.name}
                  label={skill.name}
                  placement="top-start"
                >
                  <Flex
                    p="20px"
                    w="80px"
                    h="80px"
                    alignItems="center"
                    justifyContent="center"
                    bg="#2b2b2b"
                    borderRadius="16px"
                    transition="transform 0.2s"
                    _hover={{
                      transform: "scale(1.1)",
                    }}
                  >
                    {skill.icon}
                  </Flex>
                </Tooltip>
              ))}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
