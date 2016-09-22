import React from 'react';
import { Link } from 'react-router';

const Lens = React.createClass({
  render() {
    const { i, lens } = this.props;
    return (
      <div className='grid-unit'>
        <div className='grid-lens'>
          <ul className='lens-items-list'>
            <li><Link to={`/view/${lens.code}`}>
              Position: {lens.eye}</Link></li>
              <li>Opened: {lens.open_date}</li>
              <li>Expires on: {lens.expiry_date}</li>
              <li>Days left: {lens.days}</li>
          </ul>
        </div>
        <button onClick={() => console.log('Delete this lens')}>x</button>
      </div>
    );
  }
});

export default Lens;
