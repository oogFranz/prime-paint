import React, { Component } from "react";
import Square from "./Square";

export default class Board extends Component {
  constructor(props) {
    super(props);
    const squares = Array.from(new Array(this.props.column), () =>
      new Array(this.props.row).fill(0)
    );
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
        key={i.toString() + j.toString()}
        value={this.state.squares[i][j]}
        onClick={() => this.handleClick(i, j)}
      />
    );
  }

  renderRow(row) {
    const columns = [];
    for (let i = 0; i < this.props.column; i++) {
      columns.push(this.renderSquare(i, row));
    }
    return (
      <div key={row.toString()} className="board-row">
        {columns}
      </div>
    );
  }

  render() {
    const rows = [];
    for (let i = 0; i < this.props.row; i++) {
      rows.push(this.renderRow(i));
    }
    return <div className="Board">{rows}</div>;
  }
}
