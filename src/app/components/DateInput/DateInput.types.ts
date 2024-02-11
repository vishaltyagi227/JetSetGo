export interface IDateInput {
  name: string;
  onChange: (date: Date | null) => void;
  value: Date | null;
  placeholder?: string;
  filterDate?: (date: Date | null) => boolean;
}
