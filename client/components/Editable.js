import React from 'react';

export default ({ editing, field, value, onEdit }) => {
  if (editing === field) {
    return <Edit value={value} onEdit={onEdit} {...this.props} />;
  }

  return <span>{value}</span>
}

const Edit = React.createClass({
  render() {
    const { value, ...props } = this.props;

    return <input type='text'
                  autoFocus={true}
                  defaultValue={value}
                  onBlur={this.finishEdit}
                  onKeyPress={this.checkEnter}
                  {...props} />;
  },
  checkEnter(e) {
    if (e.key === 'Enter') {
      this.finishEdit(e);
    }
  },
  finishEdit(e) {
    const value = e.target.value;

    if (this.props.value) {
      this.props.onEdit(value);
    }
  }
});
