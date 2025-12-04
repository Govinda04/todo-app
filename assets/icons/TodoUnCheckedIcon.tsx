import * as React from "react";
import Svg, { Path, Polyline } from "react-native-svg";

const TodoUnChecked = ({
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
      d="M20,21H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3H20a1,1,0,0,1,1,1V20A1,1,0,0,1,20,21Z"
      //   fill={props.color || "#000"}
      stroke={color}
    />
  </Svg>
);

export default TodoUnChecked;

// <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" id="check-mark-square" xmlns="http://www.w3.org/2000/svg" class="icon line">

// <g id="SVGRepo_bgCarrier" stroke-width="0"/>

// <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

// <g id="SVGRepo_iconCarrier">

// <path id="primary" d="M20,21H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3H20a1,1,0,0,1,1,1V20A1,1,0,0,1,20,21Z" style="fill: none; stroke: #33b1f0; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;"/>

// </g>

// </svg>
