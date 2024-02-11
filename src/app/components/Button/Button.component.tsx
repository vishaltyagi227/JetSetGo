import '@components/Button/Button.style.scss';
import { IButton } from '@components/Button/Button.types';

const Button = (props: IButton) => {
  const {
    children,
    onClick,
    type = 'button',
    variant = 'primary',
    removeSpacing = false,
    isTransparentBG = false,
  } = props;

  return (
    <button
      className={`button button--${variant} ${removeSpacing ? 'button--no-spacing' : ''} ${isTransparentBG ? 'button--transparent-bg' : ''}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
