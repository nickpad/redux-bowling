import React from 'react';
import times from 'lodash/times';
import Frame from '../components/Frame';
import PinOption from '../components/PinOption';

export default class App extends React.Component {
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
    let element;

    if (number > this.props.pinsLeft) {
      element = <span key={number} className="disabled">{number}</span>;
    } else {
      element = <a key={number} className="pin-option">{number}</a>;
    }

    return element;
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
          {times(10, (i) => <Frame key={i} />)}
          {this.finalFrame()}
        </div>
        <h2>Number of pins</h2>
        <div className="scoring">
          {times(10, (i) => <PinOption key={i} number={i + 1} pinsLeft={10} />)}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  pinsLeft: React.PropTypes.number.isRequired,
};
