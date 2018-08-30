import React, { Component } from "react";
import Circle from "./Circle";
import Color from "./Color";

export default class Palette extends Component {
  renderCircle(colorName) {
    const selected = colorName === this.props.selected;
    return (
      <Circle
        key={"palette" + colorName}
        color={new Color(colorName)}
        selected={selected}
        onClick={() => this.props.onClick(colorName)}
      />
    );
  }

  render() {
    const circles = Color.COLOR.map(colorName => this.renderCircle(colorName));
    return <div className="palette">{circles}</div>;
  }
}
