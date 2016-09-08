import React from 'react';
import { Link } from 'react-router';

const Lens = React.createClass({
  render() {
    const { i, lens } = this.props;
    return (
      <div className='grid-unit'>
        <div className='grid-lens'>
          <Link to={`/view/${lens.code}`}>
            Position: {lens.eye}
          </Link>
        </div>
      </div>
    );
  }
});

export default Lens;
