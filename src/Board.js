import React, { Component } from "react";
import Square from "./Square";

export default class Board extends Component {
  render() {
    return (
      <div className="Board">
        <Square />
        <Square />
      </div>
    );
  }
}
