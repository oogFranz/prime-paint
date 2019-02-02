import React, { Component } from "react";
import Board from "./Board";
import Palette from "./Palette";
import Color from "../Color";

export default class Paint extends Component {
  constructor(props) {
    super(props);
    const squares = Array.from(new Array(this.props.size), () =>
      new Array(this.props.size).fill(new Color())
    );
    this.state = {
      squares: squares,
      selected: "white",
      isMouseDown: false,
    };
  }

  handleBoardMouseDown(i, j) {
    this.setState({ isMouseDown: true });
    this.draw(i, j);
  }

  draw(i, j) {
    const squares = this.state.squares.slice();
    squares[i][j] = new Color(this.state.selected);
    this.setState({ squares: squares });
  }

  handleMouseEnter(i, j) {
    if (this.state.isMouseDown) {
      this.draw(i, j);
    }
  }

  handleMouseOut() {
    this.setState({ isMouseDown: false });
  }

  handlePaletteClick(colorName) {
    this.setState({ selected: colorName });
  }

  render() {
    return (
      <div className="Paint">
        <Board
          size={this.props.size}
          squares={this.state.squares}
          onMouseDown={(i, j) => this.handleBoardMouseDown(i, j)}
          onMouseEnter={(i, j) => this.handleMouseEnter(i, j)}
          mouseOut={this.handleMouseOut.bind(this)}
        />
        <Palette
          selected={this.state.selected}
          onClick={colorName => this.handlePaletteClick(colorName)}
        />
      </div>
    );
  }
}
