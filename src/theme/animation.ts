import { motion } from "framer-motion";
import { Center, CenterProps, Flex, FlexProps } from "@chakra-ui/react";

export const animationCenter = {
  initial: { scale: 0 },
  animate: { rotate: 180, scale: 1 },
  transition: {
    type: "spring",
    stiffness: 260,
    damping: 20,
  },
};

export const MotionCenter = motion<CenterProps>(Center);
export const MotionFlex = motion<FlexProps>(Flex);
