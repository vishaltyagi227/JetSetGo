import icons from '@assets/icons';
import Button from '@components/Button';
import '@components/FlightInfoCard/FlightInfoCard.style.scss';
import { IFlightInfoCardProps } from '@components/FlightInfoCard/FlightInfoCard.types';

const FlightInfoCard = (props: IFlightInfoCardProps) => {
  const { flightInfo } = props;

  const departureDate = flightInfo.source.departureTime.format('ddd, d MMM');
  const departureTime = flightInfo.source.departureTime.format('HH:mm');
  const arrivalTime = flightInfo.destination.arrivalTime.format('HH:mm');
  const flightDuration = flightInfo.duration;

  const airlinesLogo: Record<string, string> = {
    ['AB']: icons.spiceJetLogo,
    ['CD']: icons.airIndiaLogo,
  };

  return (
    <div className="card-container">
      <div className="airlines-details">
        <span className="airlines-details__logo">
          <img src={airlinesLogo[flightInfo.airline.code]} />
        </span>
        <span className="airlines-details__name">
          {flightInfo.airline.displayName}
        </span>
      </div>
      <div className="flight-details">
        <div className="flight-details__date">
          <span className="flight-details__date--highlight">Depart</span>
          <span>{` ${departureDate}`}</span>
          <span className="flight-details__airline-name">
            {flightInfo.airline.displayName}
          </span>
          <div className="flight-details__timings">
            <div className="flight-details__time-info">
              <span className="flight-details__time-text">{`${departureTime}`}</span>
              <span className="flight-details__location">{`${flightInfo.source.airport.airportCode} (${flightInfo.source.airport.cityName})`}</span>
            </div>
            <div className="flight-details__time-duration">
              <div className="flight-details__flight-duration">
                {flightDuration}
              </div>
              <div className="divider"></div>
              <div className="flight-details__journey-info">
                <span>Non Stop</span>
              </div>
            </div>
            <div className="flight-details__time-info">
              <span className="flight-details__time-text">{arrivalTime}</span>
              <span className="flight-details__location">{`${flightInfo.destination.airport.airportCode} (${flightInfo.destination.airport.cityName})`}</span>
            </div>
          </div>
        </div>
        <div className="flight-details__fare">
          <span className="flight-details__fare-price">
            {`₹${flightInfo.price}`}
          </span>
          <span className="flight-details__more-details-button">
            <Button
              onClick={() => {
                /* handle view more action */
              }}
              variant="secondary"
            >
              View Fares
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FlightInfoCard;
