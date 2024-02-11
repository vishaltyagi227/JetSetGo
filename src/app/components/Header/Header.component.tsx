import logo from '@assets/logo.svg';
import '@components/Header/Header.styles.scss';

const Header = () => {
  return (
    <header className="app-header">
      <div className="container">
        <div className="logo">
          <div className="logo__image">
            <img src={logo} />
          </div>
          <span className="logo__text">JetSetGo</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
