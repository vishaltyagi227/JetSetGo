import { Order } from '@constants/global.const';
import { fetchFlightEnquiryDetails } from '@services/flightEnquiry/flightEnquiry.service';
import { IFilter, IFlightEnquiryDetails } from '@src/app/types/flight.types';
import { useRef, useState } from 'react';

const useFlightEnquiry = (): {
  isLoading: boolean;
  flightEnquiryDetails: IFlightEnquiryDetails[];
  getFlightDetails: (filter?: IFilter, order?: Order) => Promise<void>;
} => {
  const [isLoading, setIsLoading] = useState(false);
  const flightEnquiryQueryRawData = useRef<IFlightEnquiryDetails[]>([]);
  const [flightEnquiryDetails, setFlightEnquiryDetails] = useState<
    IFlightEnquiryDetails[]
  >([]);

  const getFilterData = (data: IFlightEnquiryDetails[], filter: IFilter) => {
    const { airlines } = filter;

    return data.filter((flightData) =>
      airlines.includes(flightData.airline.code),
    );
  };

  const getSortedData = (data: IFlightEnquiryDetails[], order: Order) => {
    return data.sort((a, b) => {
      if (Order.ASC === order) {
        return a.price - b.price;
      }

      return b.price - a.price;
    });
  };

  const getFlightDetails = async (filter?: IFilter, order?: Order) => {
    setIsLoading(true);

    if (!flightEnquiryQueryRawData.current.length) {
      const { data } = await fetchFlightEnquiryDetails();

      if (data) {
        flightEnquiryQueryRawData.current = data;
      }
    }

    let enquiryData = [...flightEnquiryQueryRawData.current];

    if (filter) {
      enquiryData = getFilterData(enquiryData, filter);
    }

    if (order) {
      enquiryData = getSortedData(enquiryData, order);
    }

    setFlightEnquiryDetails(enquiryData);
    setIsLoading(false);
  };

  return { isLoading, flightEnquiryDetails, getFlightDetails };
};

export default useFlightEnquiry;
