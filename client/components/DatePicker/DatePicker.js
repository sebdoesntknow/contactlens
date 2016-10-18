import React from 'react';
import moment from 'moment';

// widget setup
import Moment from 'moment';
import momentLocalizer from 'react-widgets/lib/localizers/moment';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';

// localizer setup
momentLocalizer(Moment);

// Styles
import 'react-widgets/lib/less/react-widgets.less';

export default ({ editing, field, value, onEdit }) => {
  if (editing === field) {
    return <DatePicker styleName='datepicker' value={value} onEdit={onEdit} field={field} />;
  }

  return <span>{value}</span>
}

const DatePicker = React.createClass({
  render() {
    const { value } = this.props;

    return (
        <DateTimePicker defaultValue={new Date(value)}
                        format={'DD MMM YYYY'}
                        time={false}
                        autoFocus={true}
                        onBlur={this.finishEdit}
                        onKeyPress={this.checkEnter} />
    );
  },
  checkEnter(e) {
    if (e.Key === 'Enter') {
      this.finishedit(e);
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
