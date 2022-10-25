import { useMediaQuery, Flex, FlexProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import Logo48 from "../Icons/Logo48";

interface ContainerMainProps {
  children: ReactNode;
  props?: FlexProps;
}

export const ContainerMain = ({ children, ...props }: ContainerMainProps) => {
  const [isMobile] = useMediaQuery("(max-width: 767px)");

  return (
    <Flex
      h={"100vh"}
      bg="background.primary.500"
      w="100%"
      direction="column"
      {...props}
    >
      {children}
    </Flex>
  );
};
