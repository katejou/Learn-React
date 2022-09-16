import React from "react";
import ProviderContext from "./Provider_2";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "湯姆貓表",
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <ProviderContext />
      </div>
    );
  }
}

export default App;
