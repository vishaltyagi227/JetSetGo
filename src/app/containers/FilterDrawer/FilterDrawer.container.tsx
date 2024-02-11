import icons from '@assets/icons';
import Button from '@components/Button';
import '@containers/FilterDrawer/FilterDrawer.styles.scss';
import { useState } from 'react';
import { IFilterDrawerProps } from './FilterDrawer.types';

const filter = {
  label: 'Preferred Airlines',
  id: 'airlines',
  options: [
    {
      id: 'IDG',
      displayName: 'IndiGo',
      imgUrl: icons.indiGo,
    },
    {
      id: 'IAD',
      displayName: 'Air Asia',
      imgUrl: icons.airAsia,
    },
    {
      id: 'CAO',
      displayName: 'Air China',
      imgUrl: icons.airChina,
    },
    {
      id: 'AEL',
      displayName: 'Air Europe',
      imgUrl: icons.airEurope,
    },
    {
      id: 'CD',
      displayName: 'Air India',
      imgUrl: icons.airIndiaLogo,
    },
    {
      id: 'ABQ',
      displayName: 'Airblue',
      imgUrl: icons.airblue,
    },
    {
      id: 'BGA',
      displayName: 'Airbus',
      imgUrl: icons.airbus,
    },
    {
      id: 'ABY',
      displayName: 'Emirates',
      imgUrl: icons.emirates,
    },
    {
      id: 'AB',
      displayName: 'JetSpice',
      imgUrl: icons.spiceJetLogo,
    },
    {
      id: 'AE',
      displayName: 'Sri Lanka Airline',
      imgUrl: icons.sriLankaAirline,
    },
    {
      id: 'VIK',
      displayName: 'Viking Airline',
      imgUrl: icons.vikingsAir,
    },
    {
      id: 'VTI',
      displayName: 'Vistara',
      imgUrl: icons.vistara,
    },
  ],
};

const FilterDrawer = (props: IFilterDrawerProps) => {
  const { onFilterChange, showDrawer } = props;
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    let updatedFilter = selectedFilters;
    if (selectedFilters.includes(name)) {
      updatedFilter = selectedFilters.filter((value) => value !== name);
    } else {
      updatedFilter = [...selectedFilters, name];
    }

    setSelectedFilters(updatedFilter);
    onFilterChange(updatedFilter);
  };

  const handleFilterReset = () => {
    setSelectedFilters([]);
    onFilterChange([]);
  };

  return (
    <div className={`filter ${showDrawer ? '' : 'filter--hidden'}`}>
      <div className="filter__header">
        <span>Filters</span>
        <Button
          onClick={handleFilterReset}
          variant="secondary"
          removeSpacing
        >
          Reset All
        </Button>
      </div>

      <div className="filter__content">
        <p className="filter__label">{filter.label}</p>
        <ul className="filter__list">
          {filter.options.map((option) => {
            return (
              <li
                key={option.id}
                className="filter__list-item"
              >
                <label
                  title={option.displayName}
                  htmlFor={option.id}
                >
                  {option.imgUrl && (
                    <span className="filter__list-item-image">
                      <img src={option.imgUrl} />
                    </span>
                  )}
                  {option.displayName}
                </label>
                <input
                  className="filter__checkbox-input"
                  type="checkbox"
                  id={option.id}
                  name={option.id}
                  onChange={handleFilterSelect}
                  checked={selectedFilters.includes(option.id)}
                />
                <label
                  htmlFor={option.id}
                  className="filter__check-box"
                ></label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FilterDrawer;
