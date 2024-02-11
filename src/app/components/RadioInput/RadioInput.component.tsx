import '@components/RadioInput/RadioInput.style.scss';
import { IRadioInput } from '@components/RadioInput/RadioInput.types';

const RadioInput = (props: IRadioInput) => {
  const { name, onChange, options, value } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    onChange(value);
  };

  return (
    <div className="radio-input-group">
      {options.map((option) => {
        return (
          <div
            key={option.value}
            className="radio-input-group__input-wrapper"
          >
            <div className="radio-input-group__check-box"></div>
            <input
              className="radio-input-group__radio-input"
              name={name}
              type="radio"
              value={option.value}
              checked={value === option.value}
              onChange={handleChange}
            />
            <label
              htmlFor="name"
              className="radio-input-group__radio-label"
            >
              {option.label}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default RadioInput;
