import * as React from "react";
import { SVGProps } from "react";

export const Email = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill={props.fill || "#A3A3A3"}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M2.063 6.944A2.5 2.5 0 0 1 4.5 5h15a2.5 2.5 0 0 1 2.438 1.944L12 13.018 2.062 6.944ZM2 8.37v8.88l7.254-4.447L2 8.37Zm8.451 5.166L2.24 18.572A2.5 2.5 0 0 0 4.5 20h15a2.5 2.5 0 0 0 2.26-1.43l-8.213-5.034-1.547.947-1.549-.946Zm4.295-.732L22 17.251v-8.88l-7.254 4.433v.001Z" />
  </svg>
);
