import React, { Component } from "react";
import Board from "./Board";
import Palette from "./Palette";
import Color from "./Color";

export default class Paint extends Component {
  constructor(props) {
    super(props);
    const squares = Array.from(new Array(this.props.column), () =>
      new Array(this.props.row).fill(new Color())
    );
    this.state = {
      squares: squares,
      selected: "white",
    };
  }

  handleBoardClick(i, j) {
    const squares = this.state.squares.slice();
    squares[i][j] = new Color(this.state.selected);
    this.setState({ squares: squares });
  }

  handlePaletteClick(colorName) {
    this.setState({ selected: colorName });
  }

  render() {
    return (
      <div className="Paint">
        <Board
          column={this.props.column}
          row={this.props.row}
          squares={this.state.squares}
          onClick={(i, j) => this.handleBoardClick(i, j)}
        />
        <Palette
          selected={this.state.selected}
          onClick={colorName => this.handlePaletteClick(colorName)}
        />
      </div>
    );
  }
}
