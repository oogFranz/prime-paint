import React, { Component } from "react";
import Square from "./Square";

export default class Board extends Component {
  renderSquare(i, j) {
    return (
      <Square
        key={i.toString() + j.toString()}
        color={this.props.squares[i][j]}
        onMouseDown={() => this.props.onMouseDown(i, j)}
        onMouseEnter={() => this.props.onMouseEnter(i, j)}
      />
    );
  }

  renderRow(row) {
    const columns = [];
    for (let i = 0; i < this.props.size; i++) {
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
    for (let i = 0; i < this.props.size; i++) {
      rows.push(this.renderRow(i));
    }
    return (
      <div
        className="board"
        onMouseUp={this.props.mouseOut}
        onMouseLeave={this.props.mouseOut}
      >
        {rows}
      </div>
    );
  }
}
