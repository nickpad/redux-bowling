import React from 'react';

export default class App extends React.Component {
  render() {
    let element;

    if (this.props.number > this.props.pinsLeft) {
      element = <span className="disabled">{this.props.number}</span>;
    } else {
      element = <a className="pin-option">{this.props.number}</a>;
    }

    return element;
  }
}

App.propTypes = {
  number: React.PropTypes.number.isRequired,
  pinsLeft: React.PropTypes.number.isRequired,
};
