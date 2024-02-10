import { IFlightDetailsResponse } from '@services/flightEnquiry/flightEnquiry.types';
import { IFlightEnquiryDetails } from '@src/app/types/flight.types';
import moment from 'moment';

export const mapFlightDetailsServerResponse = (
  flightDetails: IFlightDetailsResponse,
): IFlightEnquiryDetails[] => {
  // create separate flight entry based on the airlines if more than one flight have same source and departure details
  // but airlines are different

  return flightDetails.displayData.airlines.map((airline) => {
    const {
      id,
      fare,
      displayData: { source, destination, totalDuration },
    } = flightDetails;

    return {
      id: id,
      price: fare,
      airline: {
        code: airline.airlineCode,
        displayName: airline.airlineName,
        flightNumber: airline.flightNumber,
      },
      duration: totalDuration,
      source: {
        airport: source.airport,
        departureTime: moment(source.depTime),
      },
      destination: {
        airport: destination.airport,
        arrivalTime: moment(destination.arrTime),
      },
    };
  });
};
