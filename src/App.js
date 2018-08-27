import React, { Component } from "react";
import Board from "./Board";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board column={5} row={4} />
      </div>
    );
  }
}

export default App;
