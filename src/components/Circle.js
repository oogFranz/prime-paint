import React from "react";

export default function Circle(props) {
  const selected = props.selected ? "selected" : "unselected";
  const className = ["circle", props.color.getColorName(), selected].join(" ");
  return <button className={className} onClick={props.onClick} />;
}
