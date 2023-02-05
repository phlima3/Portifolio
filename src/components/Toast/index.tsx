import React, { useState, useEffect } from "react";
import { Box, useDisclosure, Text, Button } from "@chakra-ui/react";

export const Toast = () => {
  const { isOpen, onClose } = useDisclosure();
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsClosing(true);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <Box
      as="aside"
      position="fixed"
      bottom={0}
      right={0}
      zIndex={4}
      p={3}
      m={3}
      rounded="lg"
      bg="green.500"
      display={isOpen ? "flex" : "none"}
      opacity={isClosing ? 0 : 1}
      transition="all 0.3s"
      onAnimationEnd={() => {
        if (isClosing) {
          onClose();
        }
      }}
    >
      <Text color="white">Toast message</Text>
      <Button onClick={onClose} ml="auto">
        Close
      </Button>
    </Box>
  );
};
