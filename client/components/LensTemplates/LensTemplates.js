import React from 'react';

// CSS
import CSSModules from 'react-css-modules';
import styles from './LensTemplates.styles.css';

class LensTemplates extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div styleName='lens-templates-footer'>
        This is the select template area
      </div>
    );
  }
}

export default CSSModules(LensTemplates, styles);
