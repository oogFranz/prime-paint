import React, { Component } from "react";
import Paint from "./Paint";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Paint size={16} />
      </div>
    );
  }
}

export default App;
