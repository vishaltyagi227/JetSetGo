export interface IRadioInput {
  name: string;
  value: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
}
