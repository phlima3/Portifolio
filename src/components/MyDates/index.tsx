import { Circle } from "@chakra-ui/layout";
import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface MyDatesProps {
  date: string;
  description: string;
}
export const MyDates = ({ date, description }: MyDatesProps) => {
  const squareVariants = {
    visible: { opacity: 1, scale: 1.0, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 1.1 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={squareVariants}
    >
      <Flex
        direction="column"
        gap={3}
        alignItems="center"
        justifyContent="center"
        maxW="560px"
        px={6}
      >
        <Circle minW="64px" maxW="64px" minH="64px" bg="#FB3640">
          <Text fontWeight={700} fontSize={20} color="background.primary.500">
            {date}
          </Text>
        </Circle>
        <Text
          fontWeight={500}
          fontSize={14}
          color="text.secondary"
          textAlign="center"
        >
          {description}
        </Text>
      </Flex>
    </motion.div>
  );
};
