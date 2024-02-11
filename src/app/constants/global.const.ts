export enum Order {
  ASC = 'ASC',
  DES = 'DES',
}

export const PASSENGERS_OPTIONS = Array.from(new Array(9)).map((_, index) => {
  return { label: `${index + 1}`, value: `${index + 1}` };
});

export const TRIP_TYPE_OPTIONS = [
  { label: 'One Way', value: 'one-way' },
  { label: 'Round Trip', value: 'round-trip' },
  { label: 'Multiple City', value: 'multiple-city' },
];

export const FARE_TYPE_OPTIONS = [
  { label: 'Regular', value: 'regular' },
  { label: 'Student', value: 'student' },
  { label: 'Senior Citizens', value: 'senior-citizen' },
  { label: 'Doctor & Nurses', value: 'doctor' },
  { label: 'Armed Forces', value: 'armed-force' },
];

export const FLIGHT_CLASS_TYPE_OPTIONS = [
  {
    label: 'Economy',
    value: 'economy',
  },
  { label: 'Premium Economy', value: 'premium-economy' },
  { label: 'Business', value: 'business' },
  { label: 'First Class', value: 'First Class' },
];

export const FLIGHT_LOCATION_OPTIONS = [
  {
    label: 'Delhi, India - DEL',
    value: 'DEL',
  },
  {
    label: 'Mumbai, India - BOM',
    value: 'BOM',
  },
  {
    label: 'Chennai, India - MAA',
    value: 'MAA',
  },
];
