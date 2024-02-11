import { Moment } from 'moment';

export interface IAirportDetails {
  cityCode: string;
  cityName: string;
  terminal: string;
  airportCode: string;
  airportName: string;
  countryCode: string;
  countryName: string;
}

interface ISourceAirport {
  airport: IAirportDetails;
  departureTime: Moment;
}

interface IDestinationAirport {
  airport: IAirportDetails;
  arrivalTime: Moment;
}

export interface IAirlineDetails {
  code: string; // optimize to use only known airline code
  displayName: string;
  flightNumber: string;
}

export interface IFlightEnquiryDetails {
  id: string;
  price: number;
  airline: IAirlineDetails;
  duration: string;
  source: ISourceAirport;
  destination: IDestinationAirport;
}

export interface IFilter {
  airlines: IAirlineDetails['code'];
}
