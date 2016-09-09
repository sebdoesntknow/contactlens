import React from 'react';
import { Link } from 'react-router';

const ContactLensHeader = React.createClass({
  render() {
    return (
      <div className='clens-header'>
        <h1>
          <Link to='/'>ContactLens</Link>
        </h1>
      </div>
    );
  }
});

export default ContactLensHeader;
