import React from 'react';
import ContactLensHeader from './ContactLensHeader';
import { Link } from 'react-router';

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
