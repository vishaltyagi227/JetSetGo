import DateInput from '@components/DateInput';
import SelectInput from '@components/SelectInput';
import {
  FARE_TYPE_OPTIONS,
  FLIGHT_CLASS_TYPE_OPTIONS,
  FLIGHT_LOCATION_OPTIONS,
  PASSENGERS_OPTIONS,
  TRIP_TYPE_OPTIONS,
} from '@constants/global.const';
import '@containers/FlightEnquiryForm/FlightEnquiryForm.styles.scss';
import {
  IFlightEnquiryFormDetails,
  IFlightEnquiryFormProps,
} from '@containers/FlightEnquiryForm/FlightEnquiryForm.types';
import Button from '@src/app/components/Button';
import RadioInput from '@src/app/components/RadioInput';
import moment from 'moment';
import { useState } from 'react';

const FlightEnquiryForm = (props: IFlightEnquiryFormProps) => {
  const [formDetails, setFormDetails] = useState<IFlightEnquiryFormDetails>({
    fareType: 'regular',
    tripType: 'one-way',
    departureTime: null,
    source: '',
    destination: '',
    passengers: '1',
    class: 'economy',
  });

  const { onSearch } = props;

  const fieldsName = {
    fareType: 'fareType',
    tripType: 'tripType',
    departureTime: 'departureTime',
    source: 'source',
    destination: 'destination',
    passengers: 'passengers',
    class: 'class',
  };

  const handleFormDetails = (name: string, value: string | Date | null) => {
    setFormDetails((previous) => ({ ...previous, [name]: value }));
  };

  const disabledPastDate = (date: Date | null) => {
    if (!date) {
      return false;
    }

    const currentDate = moment();
    const cellDate = moment(date);

    return !cellDate.isBefore(currentDate, 'day');
  };

  const handleSearchClick = () => {
    onSearch(formDetails);
  };

  return (
    <div className="enquiry-form">
      <div className="enquiry-form__field-wrapper">
        <div className="enquiry-form__field">
          <label
            className="enquiry-form__field-label"
            htmlFor={fieldsName.tripType}
          >
            Trip Type
          </label>
          <RadioInput
            name={fieldsName.tripType}
            value={formDetails.tripType}
            options={TRIP_TYPE_OPTIONS}
            onChange={(val: string) =>
              handleFormDetails(fieldsName.tripType, val)
            }
          />
        </div>
      </div>
      <div className="enquiry-form__field-wrapper">
        <div className="enquiry-form__field enquiry-form__field--wrap">
          <label
            className="enquiry-form__field-label"
            htmlFor={fieldsName.source}
          >
            From
          </label>
          <SelectInput
            name={fieldsName.source}
            value={formDetails.source}
            options={FLIGHT_LOCATION_OPTIONS.map((option) => {
              return {
                ...option,
                isDisabled: option.value === formDetails.destination,
              };
            })}
            onChange={(val: string) =>
              handleFormDetails(fieldsName.source, val)
            }
          />
        </div>
        <div className="enquiry-form__field enquiry-form__field--wrap">
          <label
            className="enquiry-form__field-label"
            htmlFor={fieldsName.destination}
          >
            To
          </label>
          <SelectInput
            name={fieldsName.destination}
            value={formDetails.destination}
            options={FLIGHT_LOCATION_OPTIONS.map((option) => {
              return {
                ...option,
                isDisabled: option.value === formDetails.source,
              };
            })}
            onChange={(val: string) =>
              handleFormDetails(fieldsName.destination, val)
            }
          />
        </div>
        <div className="enquiry-form__field enquiry-form__field--wrap">
          <label
            className="enquiry-form__field-label"
            htmlFor={fieldsName.departureTime}
          >
            Depart
          </label>
          <DateInput
            name={fieldsName.departureTime}
            value={formDetails.departureTime}
            onChange={(date) =>
              handleFormDetails(fieldsName.departureTime, date)
            }
            filterDate={disabledPastDate}
          />
        </div>
        <div className="enquiry-form__field enquiry-form__field--wrap">
          <label
            className="enquiry-form__field-label"
            htmlFor={fieldsName.passengers}
          >
            Passengers
          </label>
          <SelectInput
            name={fieldsName.passengers}
            value={formDetails.passengers}
            options={PASSENGERS_OPTIONS}
            onChange={(val: string) =>
              handleFormDetails(fieldsName.passengers, val)
            }
          />
        </div>
        <div className="enquiry-form__field enquiry-form__field--wrap">
          <label
            className="enquiry-form__field-label"
            htmlFor={fieldsName.class}
          >
            Class
          </label>
          <SelectInput
            name={fieldsName.class}
            value={formDetails.class}
            options={FLIGHT_CLASS_TYPE_OPTIONS}
            onChange={(val: string) => handleFormDetails(fieldsName.class, val)}
          />
        </div>
      </div>
      <div className="enquiry-form__field-wrapper">
        <div className="enquiry-form__field">
          <label
            className="enquiry-form__field-label"
            htmlFor={fieldsName.fareType}
          >
            Fare Type
          </label>
          <RadioInput
            name={fieldsName.fareType}
            value={formDetails.fareType}
            options={FARE_TYPE_OPTIONS}
            onChange={(val: string) =>
              handleFormDetails(fieldsName.fareType, val)
            }
          />
        </div>
        <div className="enquiry-form__submit-button">
          <Button onClick={handleSearchClick}> Search </Button>
        </div>
      </div>
    </div>
  );
};

export default FlightEnquiryForm;
