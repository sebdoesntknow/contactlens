import React from 'react';

// CSS
import CSSModules from 'react-css-modules';
import styles from './LensTemplates.styles.css';

class LensTemplates extends React.Component {
  constructor(props) {
    super(props);
    this.onTemplateChange = this.onTemplateChange.bind(this);
  }

  render() {
    const { lensTemplates } = this.props;
    const defaultTemplate = lensTemplates.filter(t => {
      if (t.default) {
        return t;
      }
    });
    const defaultIndex = lensTemplates.indexOf(defaultTemplate[0]);

    return (
      <div styleName='lens-templates-footer'>
          <select value={defaultIndex} onChange={this.onTemplateChange}>
            {lensTemplates.map(({brand, days}, index) => {
              return <option key={index} value={index}>Brand: {brand} - Days: {days}</option>;
            })}
          </select>
      </div>
    );
  }

  onTemplateChange(event) {
    this.props.setTemplate(event.target.value);
  }
}

export default CSSModules(LensTemplates, styles);
