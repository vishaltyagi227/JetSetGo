import '@components/SelectInput/SelectInput.style.scss';
import Select, { SingleValue } from 'react-select';
import { ISelectInput } from './SelectInput.types';

const SelectInput = (props: ISelectInput) => {
  const { name, onChange, options, value, placeholder = 'Select' } = props;

  const handleChange = (
    newValue: SingleValue<{ label: string; value: string }>,
  ): void => {
    onChange(newValue?.value ?? '');
  };

  return (
    <Select<{ label: string; value: string; isDisabled?: boolean }>
      name={name}
      value={options.find((option) => option.value === value)}
      options={options}
      onChange={handleChange}
      placeholder={placeholder}
      isOptionDisabled={(option) => {
        return option?.isDisabled;
      }}
      className="dropdown-select"
      styles={{
        option: (base, option) => ({
          ...base,
          color: !option?.isDisabled ? '#fff' : '#ddd',
          cursor: !option?.isDisabled ? 'pointer' : 'not-allowed',
        }),
        input: (base) => ({
          ...base,
          cursor: 'pointer',
        }),
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: '#33A0FB',
          neutral0: '#0C346A',
          neutral20: '#fff',
          neutral30: '#33A0FB',
          neutral40: '#fff',
          neutral50: '#fff',
          neutral60: '#fff',
          neutral70: '#fff',
          neutral80: '#fff',
          neutral90: '#fff',
        },
      })}
    />
  );
};

export default SelectInput;
