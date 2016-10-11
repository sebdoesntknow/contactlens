import React from 'react';
// component imports
import Lens from '../Lens';

const Lenses = React.createClass({
  render() {
    const { addLeftLens, addRightLens, lenses } = this.props;

    return (
      <div className='lenses-grid'>
      <button onClick={addLeftLens.bind(null)}>+L</button>
      <button onClick={addRightLens.bind(null)}>+R</button>
        {lenses.map((lens, i) =>
          <Lens key={i} i={i} lens={lens} {...this.props} />
        )}
      </div>
    );
  }
});

export default Lenses;
