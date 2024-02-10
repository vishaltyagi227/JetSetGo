import { IAirportDetails } from '@src/app/types/flight.types';

export interface IFlightDetailsResponse {
  id: string;
  fare: number;
  displayData: {
    airlines: {
      airlineCode: string;
      airlineName: string;
      flightNumber: string;
    }[];
    stopInfo: string;
    totalDuration: string;
    source: { airport: IAirportDetails; depTime: string };
    destination: { airport: IAirportDetails; arrTime: string };
  };
}

export interface IEnquireDetailsResponse {
  data: {
    result: IFlightDetailsResponse[];
  };
  message: string;
}
