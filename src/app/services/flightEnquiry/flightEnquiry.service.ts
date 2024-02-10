import { FLIGHT_ENQUIRY_API_CONFIG } from '@constants/api.const';
import AxiosClient from '@services/axiosClient/axiosClient.service';
import { mapFlightDetailsServerResponse } from '@services/flightEnquiry/flightEnquiry.helpers';
import { IEnquireDetailsResponse } from '@services/flightEnquiry/flightEnquiry.types';
import { IFlightEnquiryDetails } from '@src/app/types/flight.types';

const { baseUrl, endpoints } = FLIGHT_ENQUIRY_API_CONFIG;

const flightEnquiryClient = new AxiosClient({ baseURL: baseUrl });

export const fetchFlightEnquiryDetails = async (): Promise<
  | {
      data: IFlightEnquiryDetails[];
      error?: undefined;
    }
  | {
      error: unknown;
      data?: undefined;
    }
> => {
  try {
    const { data, message } =
      await flightEnquiryClient.get<IEnquireDetailsResponse>(
        endpoints.flightsDetails,
      );

    if (message === 'Success') {
      const flightEnquiryDetails = data.result.reduce(
        (accumulator, currentValue) => {
          accumulator.push(...mapFlightDetailsServerResponse(currentValue));
          return accumulator;
        },

        [] as IFlightEnquiryDetails[],
      );

      return { data: flightEnquiryDetails };
    } else {
      throw "Something went wrong. didn't receive success response";
    }
  } catch (error) {
    console.error('Failed to fetch the flightDetails', error);
    return { error: error };
  }
};
