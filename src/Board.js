import React, { Component } from "react";
import Square from "./Square";

export default class Board extends Component {
  renderSquare(i, j) {
    return (
      <Square
        key={i.toString() + j.toString()}
        color={this.props.squares[i][j]}
        onClick={() => this.props.onClick(i, j)}
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
