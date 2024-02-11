import ladingGif from '@assets/loading.gif';
import '@components/AppLoader/AppLoader.styles.scss';

const AppLoader = () => {
  return (
    <div className="app-loader">
      <img
        src={ladingGif}
        alt="App Loader"
      />
    </div>
  );
};

export default AppLoader;
