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

  handleClick(colorName) {
    this.setState({ selected: colorName });
  }

  renderCircle(colorName) {
    const selected = colorName === this.state.selected;
    return (
      <Circle
        key={"palette" + colorName}
        color={new Color(colorName)}
        selected={selected}
        onClick={() => this.handleClick(colorName)}
      />
    );
  }

  render() {
    const circles = Color.COLOR.map(colorName => this.renderCircle(colorName));
    return <div className="palette">{circles}</div>;
  }
}
