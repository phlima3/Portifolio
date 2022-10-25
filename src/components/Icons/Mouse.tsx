import * as React from "react";
import { SVGProps } from "react";

const Mouse = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 16.5a12.5 12.5 0 0 1 25 0v15a12.5 12.5 0 0 1-25 0v-15Zm13.75-3.75a1.25 1.25 0 0 0-2.5 0v5a1.25 1.25 0 0 0 2.5 0v-5Z"
      fill="#FB3640"
    />
  </svg>
);

export default Mouse;
