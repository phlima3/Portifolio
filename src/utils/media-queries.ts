import { useMediaQuery } from "@chakra-ui/react";

export const [isMobile] = useMediaQuery("(max-width: 767px)");
export const [isTablet] = useMediaQuery(
  "'(min-width: 768px)'(max-width: 1365px)"
);
export const [isDesktop] = useMediaQuery("(min-width: 1366px)");
