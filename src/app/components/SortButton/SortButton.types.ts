import { Order } from '@src/app/constants/global.const';

export interface ISortButton {
  label: string;
  onChange: (order?: Order) => void;
}
