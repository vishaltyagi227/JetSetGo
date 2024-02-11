import '@components/DateInput/DateInput.style.scss';
import DatePicker from 'react-datepicker';
import { IDateInput } from './DateInput.types';

import '@components/DateInput/DateInput.style.scss';
import 'react-datepicker/dist/react-datepicker.css';

const DateInput = (props: IDateInput) => {
  const { name, onChange, value, filterDate, placeholder = 'Select' } = props;

  const handleChange = (date: Date | null) => {
    onChange(date);
  };

  return (
    <div className="date-select-container">
      <DatePicker
        name={name}
        startDate={new Date()}
        selected={value}
        onChange={handleChange}
        placeholderText={placeholder}
        className="date-select__input"
        wrapperClassName="date-select"
        showIcon
        filterDate={filterDate}
        calendarIconClassname="date-select__calendar-icon"
        dateFormat={'dd-MM-YYYY'}
      />
    </div>
  );
};

export default DateInput;
