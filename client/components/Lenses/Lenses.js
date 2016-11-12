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
    const { addLeftLens, addRightLens, lenses, lensTemplates } = this.props;
    // Get current default template
    const defaultTemplate = lensTemplates.filter(t => {
      if (t.default) {
        return t;
      }
    })[0];

    return (
      <div styleName='lenses-main'>
        <div styleName='lenses-grid'>
          <button onClick={addLeftLens.bind(null, defaultTemplate)}>+L</button>
          <button onClick={addRightLens.bind(null, defaultTemplate)}>+R</button>
          {lenses.map((lens, i) =>
            <Lens key={i} i={i} lens={lens} {...this.props} styles={null} />
          )}
        </div>
        {/* It DOES matter in which order you provide props and styles={null}*/}
        <LensTemplates {...this.props} styles={null} />
      </div>
    );
  }
});

export default CSSModules(Lenses, styles);
