import React from 'react';
import { Link } from 'react-router';

// CSS modules
import CSSModules from 'react-css-modules';
import styles from './ContactLensHeader.css';

const ContactLensHeader = React.createClass({
  render() {
    return (
      <div styleName='clens-header'>
        <h1>
          <Link to='/'>ContactLens</Link>
        </h1>
      </div>
    );
  }
});

export default CSSModules(ContactLensHeader, styles);
