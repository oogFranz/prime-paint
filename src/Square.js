import React from "react";

export default function Square(props) {
  return (
    <button
      className={["square", props.color.getColorName()].join(" ")}
      onMouseDown={props.onMouseDown}
      onMouseEnter={props.onMouseEnter}
    />
  );
}
