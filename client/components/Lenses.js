import React from 'react';
// component imports
import Lens from './Lens';

const Lenses = React.createClass({
  render() {
    const { lenses } = this.props;

    return (
      <div className='lenses-grid'>
        {lenses.map((lens, i) =>
          <Lens key={i} i={i} lens={lens} {...this.props} />
        )}
      </div>
    );
  }
});

export default Lenses;
