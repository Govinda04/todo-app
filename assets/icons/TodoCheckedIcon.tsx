import * as React from "react";
import Svg, { Path, Polyline } from "react-native-svg";

const TodoChecked = ({
  color = "#33b1f0",
  size = 30,
  width = 0,
  height = 0,
  ...props
}) => (
  <Svg
    width={width || size}
    height={height || size}
    viewBox="0 0 24 24"
    fill="none"
    {...props} // Allows passing style, size, and color props
  >
    <Path
      d="M21,11v9a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3H16"
      //   fill={props.color || "#000"}
      stroke={color}
    />
    <Polyline
      points="21 5 12 14 8 10"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </Svg>
);

export default TodoChecked;

// <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" id="check-mark-square-2" xmlns="http://www.w3.org/2000/svg" class="icon line">

// <g id="SVGRepo_bgCarrier" stroke-width="0"/>

// <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

// <g id="SVGRepo_iconCarrier">

// <path id="primary" d="M21,11v9a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3H16" style="fill: none; stroke: #33b1f0; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;"/>

// <polyline id="primary-2" data-name="primary" points="21 5 12 14 8 10" style="fill: none; stroke: #33b1f0; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;"/>

// </g>

// </svg>
