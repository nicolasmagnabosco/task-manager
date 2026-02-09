import * as React from "react";
import { SVGProps } from "react";
const DragIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M10 4a2 2 0 1 1-2-2 2 2 0 0 1 2 2Zm-2 6a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm0 8a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm8-12a2 2 0 1 0-2-2 2 2 0 0 0 2 2Zm0 8a2 2 0 1 0-2-2 2 2 0 0 0 2 2Zm0 8a2 2 0 1 0-2-2 2 2 0 0 0 2 2Z" />
  </svg>
);
export default DragIcon;
