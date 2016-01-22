import React from 'react';
import times from 'lodash/utility/times';
import Frame from './frame';

export default class App extends React.Component {
  render() {
    return (<div className="app">
      <div className="frames">
        {times(9, () => <Frame/>)}
      </div>
    </div>);
  }
}
