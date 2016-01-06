import React from 'react'
import times from 'lodash/utility/times';
import Frame from './frame'

export default React.createClass({
  render() {
    return <div className='app'>
      <div className='frames'>
        {times(9, i => <Frame/>)}
      </div>
    </div>
  }
});
