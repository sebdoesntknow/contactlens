import React from 'react';
// component imports
import Lens from './Lens';

const Lenses = React.createClass({
  render() {
    const { addLeftLens, lenses } = this.props;

    return (
      <div className='lenses-grid'>
      <button onClick={addLeftLens.bind(null)}>+L</button>
      <button onClick={() => console.log('Add Right Lens')}>+R</button>
        {lenses.map((lens, i) =>
          <Lens key={i} i={i} lens={lens} {...this.props} />
        )}
      </div>
    );
  }
});

export default Lenses;
