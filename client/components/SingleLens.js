import React from 'react';
import Editable from './Editable';

// import stubs
import OpenDate from './OpenDate';
import Expires from './Expires';
import DaysLeft from './DaysLeft';


const SingleLens = React.createClass({
  render() {
    const { lenses, params, updateLens } = this.props;
    const currentLens = this.getLens(lenses, params.code);
    const { id, eye, open_date, expiry_date, days, editing, i } = currentLens;
    return (
      <div className='single-lens-container'>
        <ul className='lens-items-list'>
          <li>Position: {eye}</li>
          <li><OpenDate onClick={updateLens.bind(null, {id, editing: 'open_date'})}>
                Opened: <Editable editing={editing}
                                  field='open_date'
                                  value={open_date}
                                  onEdit={this.updateField.bind(null, id)} />
          </OpenDate></li>
          <li><Expires>Expires on: {expiry_date}</Expires></li>
          <li><DaysLeft>Days left: {days}</DaysLeft></li>
        </ul>
      </div>
    );
  },
  // Update field once editing is done
  updateField(id, field, value) {
    let { updateLens } = this.props;
    updateLens({id, [field]: value, editing: false});
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
