import React from 'react';
import times from 'lodash/utility/times';

export default class App extends React.Component {
  frame() {
    return (
      <div className="frame">
        <div className="throws">
          <div className="throw first"></div>
          <div className="throw second"></div>
        </div>
        <div className="total"></div>
      </div>
    );
  }

  finalFrame() {
    return (
      <div className="frame final-frame">
        <div className="throws">
          <div className="throw first"></div>
          <div className="throw second"></div>
          <div className="throw third"></div>
        </div>
        <div className="total"></div>
      </div>
    );
  }

  pinOption(number) {
    return (
      <a className="pins-option">{number}</a>
    );
  }

  render() {
    return (
      <div className="app">
        <header>
          <h1>Bowling</h1>
          <a className="new-game">Start New Game</a>
        </header>
        <h2>Scoreboard</h2>
        <div className="frames">
          {times(10, () => this.frame())}
          {this.finalFrame()}
        </div>
        <h2>Number of pins</h2>
        <div className="scoring">
          {times(10, (i) => this.pinOption(i + 1))}
        </div>
      </div>
    );
  }
}
