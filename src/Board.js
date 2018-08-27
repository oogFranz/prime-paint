import React, { Component } from "react";
import Square from "./Square";

export default class Board extends Component {
  constructor(props) {
    super(props);
    const squares = Array.from(new Array(4), () => new Array(4).fill(0));
    this.state = {
      squares: squares,
    };
  }

  handleClick(i, j) {
    const squares = this.state.squares.slice();
    squares[i][j] += 1;
    this.setState({ squares: squares });
  }

  renderSquare(i, j) {
    return (
      <Square
        value={this.state.squares[i][j]}
        onClick={() => this.handleClick(i, j)}
      />
    );
  }

  renderRow(row) {
    return (
      <div className="board-row">
        {this.renderSquare(0, row)}
        {this.renderSquare(1, row)}
        {this.renderSquare(2, row)}
        {this.renderSquare(3, row)}
      </div>
    );
  }

  render() {
    return (
      <div className="Board">
        {this.renderRow(0)}
        {this.renderRow(1)}
        {this.renderRow(2)}
        {this.renderRow(3)}
      </div>
    );
  }
}
