import React from 'react';

export default class Frame extends React.Component {
  render() {
    return <div className='frame'>
      <div className="throws">
        <div className="throw first">5</div>
        <div className="throw second">5</div>
      </div>
      <div className="total">10</div>
    </div>
  }
}
