import '@components/Button/Button.style.scss';
import '@components/SortButton/SortButton.style.scss';
import { ISortButton } from '@components/SortButton/SortButton.types';
import { Order } from '@src/app/constants/global.const';
import { useState } from 'react';

const SortButton = (props: ISortButton) => {
  const { label, onChange } = props;
  const [currentSelectedOrder, setCurrentSelectedOrder] = useState<Order>();

  const handleClick = (order: Order) => {
    if (currentSelectedOrder === order) {
      setCurrentSelectedOrder(undefined);
      onChange(undefined);
    } else {
      setCurrentSelectedOrder(order);
      onChange(order);
    }
  };

  return (
    <div className="sort-button sort-button-wrapper">
      <span className="sort-button__label">{label}</span>
      <button
        className={`sort-button__asc ${currentSelectedOrder === Order.ASC ? 'sort-button--selected' : ''}`}
        onClick={() => handleClick(Order.ASC)}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.9333 8.40008L8.6 10.8001V2.66675H7.26667V10.8001L4.93333 8.40008L4 9.40008L7.93333 13.3334L11.8667 9.40008L10.9333 8.40008Z"
            fill="#1C2E45"
            fillOpacity="0.6"
          />
        </svg>
      </button>
      <button
        className={`sort-button__desc ${currentSelectedOrder === Order.DES ? 'sort-button--selected' : ''}`}
        onClick={() => handleClick(Order.DES)}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.93333 7.60008L7.33333 5.20008V13.3334H8.66667V5.20008L11 7.60008L11.9333 6.60008L8 2.66675L4 6.60008L4.93333 7.60008Z"
            fill="#1C2E45"
            fillOpacity="0.6"
          />
        </svg>
      </button>
    </div>
  );
};

export default SortButton;
