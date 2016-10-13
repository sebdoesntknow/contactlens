import React from 'react';
// component imports
import Lens from '../Lens';
// CSS imports
import CSSModules from 'react-css-modules';
import styles from './lenses.style.css';

// Lenses templates
import LensTemplates from '../LensTemplates';

const Lenses = React.createClass({
  render() {
    const { addLeftLens, addRightLens, lenses } = this.props;

    return (
      <div styleName='lenses-main'>
        <div styleName='lenses-grid'>
          <button onClick={addLeftLens.bind(null)}>+L</button>
          <button onClick={addRightLens.bind(null)}>+R</button>
          {lenses.map((lens, i) =>
            <Lens key={i} i={i} lens={lens} {...this.props} styles={null} />
          )}
        </div>
        <LensTemplates />
      </div>
    );
  }
});

export default CSSModules(Lenses, styles);
