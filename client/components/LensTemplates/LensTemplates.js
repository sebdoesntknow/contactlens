import React from 'react';

// CSS
import CSSModules from 'react-css-modules';
import styles from './LensTemplates.styles.css';

class LensTemplates extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { lensTemplates } = this.props;
    return (
      <div styleName='lens-templates-footer'>
        <select styleName='template-select' onChange={this.onTemplateChange}>
          {lensTemplates.map(({brand, days}, index) => {
            return <option key={index}>Brand: {brand} - Days: {days}</option>;
          })}
        </select>
      </div>
    );
  }

  onTemplateChange() {
    console.log('Template changed!');
  }
}

export default CSSModules(LensTemplates, styles);
