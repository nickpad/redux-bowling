import React from 'react';

export default class App extends React.Component {
  render() {
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
}
