import React, { Component } from "react";
import Paint from "./Paint";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Paint column={5} row={4} />
      </div>
    );
  }
}

export default App;
