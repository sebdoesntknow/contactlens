import React from 'react';
import ContactLensHeader from './ContactLensHeader';

const Main = React.createClass({
  render() {
    return (
      <div>
        <ContactLensHeader {...this.props} />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
});

export default Main;
