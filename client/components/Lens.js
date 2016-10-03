import React from 'react';
import { Link } from 'react-router';

const Lens = React.createClass({
  render() {
    const { deleteLens, i, lens } = this.props;
    const { eye, open_date, expiry_date, days, id } = lens;
    return (
      <div className='grid-unit'>
        <div className='grid-lens'>
          <ul className='lens-items-list'>
            <li><Link to={`/view/${lens.code}`}>
              {eye} eye</Link></li>
              <li>Opened: {open_date}</li>
              <li>Expires on: {expiry_date}</li>
              <li>Days left: {days}</li>
          </ul>
        </div>
        <button onClick={deleteLens.bind(null, id, i)}>x</button>
      </div>
    );
  }
});

export default Lens;
