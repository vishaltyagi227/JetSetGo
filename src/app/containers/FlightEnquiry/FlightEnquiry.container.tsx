import useFlightEnquiry from '@hooks/useFlightEnquiry';

import FlightInfoCard from '@components/FlightInfoCard';
import FilterDrawer from '@containers/FilterDrawer';
import '@containers/FlightEnquiry/FlightEnquiry.style.scss';
import FlightEnquiryForm from '@containers/FlightEnquiryForm';
import { IFlightEnquiryFormDetails } from '@containers/FlightEnquiryForm/FlightEnquiryForm.types';
import AppLoader from '@src/app/components/AppLoader';
import Button from '@src/app/components/Button';
import SortButton from '@src/app/components/SortButton';
import { Order } from '@src/app/constants/global.const';
import { IFilter } from '@src/app/types/flight.types';
import { useRef, useState } from 'react';

function FlightEnquiryContainer() {
  const { isLoading, flightEnquiryDetails, getFlightDetails } =
    useFlightEnquiry();
  const enquiryData = useRef<{
    formData: IFlightEnquiryFormDetails | null;
    filters?: string[];
    order?: Order;
  }>({
    formData: null,
  });
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);

  const getFilter = (newFilter: Partial<IFilter>) => {
    let filters;
    if (enquiryData.current.formData) {
      const { source, destination, departureTime } =
        enquiryData.current.formData;
      filters = { source, destination, departureTime };
    }

    if (enquiryData.current.filters?.length) {
      filters = { ...(filters ?? {}), airlines: enquiryData.current.filters };
    }

    return { ...filters, ...newFilter };
  };

  const handleFlightSearch = (searchParams: IFlightEnquiryFormDetails) => {
    const { source, destination, departureTime } = searchParams;

    getFlightDetails(
      getFilter({ source, destination, departureTime }),
      enquiryData.current.order,
    );
    enquiryData.current.formData = searchParams;
  };

  const handleSortChange = (order?: Order) => {
    getFlightDetails(getFilter({}), order);
    enquiryData.current.order = order;
  };

  const handleFilterChange = (filters: string[]) => {
    getFlightDetails(
      getFilter({ airlines: filters.length ? filters : undefined }),
      enquiryData.current.order,
    );
    enquiryData.current.filters = filters;
  };

  const toggleFilterDrawer = () => {
    setShowFilterDrawer((previousState) => !previousState);
  };

  return (
    <>
      {isLoading && <AppLoader />}
      <section className="flight-enquiry-section">
        <div className="container enquiry-form-wrapper">
          <FlightEnquiryForm onSearch={handleFlightSearch} />
        </div>
      </section>
      <section className="flight-enquiry-results-section flight-enquiry-results">
        <div className="container">
          <div className="flight-enquiry-results">
            <div className="flight-enquiry-results__filter-drawer">
              <FilterDrawer
                showDrawer={showFilterDrawer}
                onFilterChange={handleFilterChange}
              />
            </div>
            <div className="flight-enquiry-results__list">
              {
                <div className="flight-enquiry-results__header">
                  <span className={`flight-enquiry-results__filter-button`}>
                    <Button
                      variant="secondary"
                      removeSpacing={!!flightEnquiryDetails.length}
                      isTransparentBG={!!flightEnquiryDetails.length}
                      onClick={toggleFilterDrawer}
                    >
                      Filter
                    </Button>
                  </span>
                  {!!flightEnquiryDetails.length && (
                    <SortButton
                      label="Fare"
                      onChange={handleSortChange}
                    />
                  )}
                </div>
              }
              {flightEnquiryDetails.map((details) => {
                return (
                  <div
                    key={details.id}
                    className="info-card-wrapper"
                  >
                    <FlightInfoCard flightInfo={details} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FlightEnquiryContainer;
