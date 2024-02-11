export interface IFlightEnquiryFormDetails {
  tripType: string;
  fareType: string;
  source: string;
  destination: string;
  departureTime: Date | null;
  passengers: string;
  class: string;
}

export interface IFlightEnquiryFormProps {
  onSearch: (formDetails: IFlightEnquiryFormDetails) => void;
}
