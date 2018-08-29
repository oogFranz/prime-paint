import React, { Component } from "react";
import Board from "./Board";
import Palette from "./Palette";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board column={5} row={4} />
        <Palette />
      </div>
    );
  }
}

export default App;
