import React from 'react';
//import Editable from './Editable';

const SingleLens = React.createClass({
  render() {
    // Would be nice to pass single lens through state instead doing this (below)
    const { lenses, params } = this.props;
    const currentLens = lenses.filter(lens => (lens.code === params.code))[0];
    const { eye, open_date, expiry_date, days } = currentLens;
    const editing = false;
    return (
      <div className='single-lens-container'>
        <ul className='lens-items-list'>
          <li>Position: {eye}</li>
          <li>Opened: {open_date}</li>
          <li>Expires on: {expiry_date}</li>
          <li>Days left: {days}</li>
        </ul>
      </div>
    );
  }
});

export default SingleLens;
