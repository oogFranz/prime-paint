import React, { Component } from "react";
import Circle from "./Circle";
import Color from "./Color";

export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
  }

  handleClick(colorName) {}

  renderCircle(colorName) {
    return (
      <Circle
        key={"palette" + colorName}
        color={new Color(colorName)}
        onClick={() => this.handleClick()}
      />
    );
  }

  render() {
    const circles = Color.COLOR.map(colorName => this.renderCircle(colorName));
    return <div className="palette">{circles}</div>;
  }
}
