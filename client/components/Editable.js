import React from 'react';

export default ({ editing, field, value, onEdit }) => {
  if (editing === field) {
    return <Edit value={value} onEdit={onEdit} field={field} />;
  }

  return <span>{value}</span>
}

const Edit = React.createClass({
  render() {
    const { value } = this.props;

    return <input type='text'
                  autoFocus={true}
                  defaultValue={value}
                  onBlur={this.finishEdit}
                  onKeyPress={this.checkEnter} />
  },
  checkEnter(e) {
    if (e.key === 'Enter') {
      this.finishEdit(e);
    }
  },
  finishEdit(e) {
    const { field } = this.props;
    const value = e.target.value;

    if (this.props.onEdit) {
      this.props.onEdit(field, value);
    }
  }
});
