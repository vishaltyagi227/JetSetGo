export interface IButton {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  onClick: () => void;
  removeSpacing?: boolean;
  isTransparentBG?: boolean;
}
