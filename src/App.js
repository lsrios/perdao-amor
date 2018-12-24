import React, { Component } from "react";
import Intro from "./components/intro";
import LoveU from "./components/loveU";
import "./App.css";

class App extends Component {
  state = { step: 1 };

  handleClick = () => {
    const step = this.state.step + 1;
    this.setState({ step });
  };

  render() {
    return (
      <main role="main" class="inner cover">
        {this.state.step === 1 ? <Intro /> : <LoveU />}
        <p class="lead">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleClick}
          >
            Clique para perdoar
          </button>
        </p>
      </main>
    );
  }
}

export default App;
