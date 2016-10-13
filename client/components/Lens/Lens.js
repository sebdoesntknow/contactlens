import React from 'react';
import { Link } from 'react-router';

// CSS styles
// Had some issues with styles being undefined
// because it was overriden by the spread props from
// Lenses parent component. Solution was to add styles={null}
// on parent object
import CSSModules from 'react-css-modules';
import styles from './Lens.styles.css';

const Lens = React.createClass({
  render() {
    const { deleteLens, i, lens } = this.props;
    const { eye, open_date, expiry_date, days, id } = lens;
    return (
      <div styleName='lens'>
          <Link to={`/view/${lens.code}`} styleName='lens-link'>
          <ul styleName='lens-details'>
              <li>{eye} eye</li>
              <li>Days left: {days}</li>
          </ul>
          </Link>
        <button onClick={deleteLens.bind(null, id, i)}>x</button>
      </div>
    );
  }
});

export default CSSModules(Lens, styles);
