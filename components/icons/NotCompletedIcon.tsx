import * as React from "react";
import { SVGProps } from "react";

const NotCompletedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="22 22 56 56" {...props}>
    <path
      d="M72 78H28c-3.3 0-6-2.7-6-6V28c0-3.3 2.7-6 6-6h44c3.3 0 6 2.7 6 6v44c0 3.3-2.7 6-6 6zM28 30v40c0 1.1.9 2 2 2h40c1.1 0 2-.9 2-2V30c0-1.1-.9-2-2-2H30c-1.1 0-2 .9-2 2z"
      opacity={props.opacity}
    />
  </svg>
);

export default NotCompletedIcon;
