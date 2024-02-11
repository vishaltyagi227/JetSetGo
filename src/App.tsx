import Header from '@components/Header';
import FlightEnquiryContainer from '@containers/FlightEnquiry';
import '@styles/main.style.scss';
import 'normalize.css';

function App() {
  return (
    <div className="app-wrapper">
      <div className="header-content">
        <Header />
      </div>
      <div className="main-content">
        <FlightEnquiryContainer />
      </div>
    </div>
  );
}

export default App;
