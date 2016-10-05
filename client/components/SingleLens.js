import React from 'react';
import Editable from './Editable';

// import stubs
import OpenDate from './OpenDate';
import Expires from './Expires';
import DaysLeft from './DaysLeft';
/*
<Editable editing={editing}
                       field='open_date'
                       value={open_date}
                       onEdit={updateLens.bind(null, {id: id, editing: false})} />
*/
const SingleLens = React.createClass({
  render() {
    const { lenses, params, updateLens } = this.props;
    let index;
    const currentLens = this.getLens(lenses, params.code);
    const { id, eye, open_date, expiry_date, days, editing, i } = currentLens;
    return (
      <div className='single-lens-container'>
        <ul className='lens-items-list'>
          <li>Position: {eye}</li>
          <li><OpenDate onClick={updateLens.bind(null, {id, editing: 'open_date'}, i)}>
          Opened date: {open_date}
          Editing: {editing}
          i: {i}
          </OpenDate></li>
          <li><Expires>Expires on: {expiry_date}</Expires></li>
          <li><DaysLeft>Days left: {days}</DaysLeft></li>
        </ul>
      </div>
    );
  },
  // Get specific lens and its index
  getLens(lenses, code) {
    let lens;
    for (let i = 0; i < lenses.length; i++) {
      if (lenses[i].code === code) {
        lens = lenses[i];
        lens.i = i;
      }
    }
    return lens;
  }
});

export default SingleLens;
