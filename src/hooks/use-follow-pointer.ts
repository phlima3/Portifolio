import { useMediaQuery } from "@chakra-ui/react";
import { useState, RefObject, useEffect, useMemo } from "react";

export function useFollowPointer(ref: RefObject<HTMLElement>) {
  const [isMobile] = useMediaQuery("(max-width: 1080px)");

  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;

    if (!isMobile) {
      const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
        const element = ref.current;

        if (!element) return;

        const x = clientX - element.offsetLeft - element.offsetWidth / 2;
        const y = clientY - element.offsetTop - element.offsetHeight / 2;

        setPoint({ x, y });
      };

      window.addEventListener("pointermove", handlePointerMove);

      return () => window.removeEventListener("pointermove", handlePointerMove);
    }
  }, []);

  const memoizedPoint = useMemo(() => point, [point]);

  return !isMobile ? memoizedPoint : { x: 0, y: 0 };
}
