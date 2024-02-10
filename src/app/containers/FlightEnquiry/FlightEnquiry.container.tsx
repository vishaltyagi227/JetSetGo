import { Order } from '@constants/global.const';
import useFlightEnquiry from '@hooks/useFlightEnquiry';
import { useEffect, useState } from 'react';

function FlightEnquiryContainer() {
  const { flightEnquiryDetails, getFlightDetails } = useFlightEnquiry();
  const [order, setOrder] = useState<Order>();

  useEffect(() => {
    getFlightDetails(undefined, order);
  }, [order]);

  return (
    <>
      <button
        onClick={() => {
          setOrder(undefined);
        }}
      >
        click
      </button>
      <button onClick={() => setOrder(Order.ASC)}> ASC Order</button>
      <button onClick={() => setOrder(Order.DES)}> DES Order</button>
      <span>{order}</span>
      <ul>
        {flightEnquiryDetails.map((data) => {
          return (
            <li key={data.id}>
              <span>{data.id}</span>
              <span>${data.price}</span>
              <span>-{data.source.departureTime.format('DD/MM/YYYY')}</span>
              <span>- {data.destination.arrivalTime.format('DD/MM/YYYY')}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default FlightEnquiryContainer;
