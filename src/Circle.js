import React from "react";

export default function Circle(props) {
  return (
    <button
      className={["circle", props.color.getColorName()].join(" ")}
      onClick={props.onClick}
    />
  );
}
