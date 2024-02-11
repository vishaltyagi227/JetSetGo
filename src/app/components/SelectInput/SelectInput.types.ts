export interface ISelectInput {
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: { label: string; value: string; isDisabled?: boolean }[];
  placeholder?: string;
}
