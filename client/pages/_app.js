import { store, wrapper } from '../state/store';
import '../styles/global.css';
import '../styles/result-basic.css';
import TopNavComponent from '../components/top-nav/top-nav.component';
import { Provider } from 'react-redux';
const MyApp = ({ Component, pageProps }) => {
  return (
    <div className='h-screen flex flex-col'>
      <Provider store={store}>
        <TopNavComponent />
        <Component {...pageProps} />
        </Provider>
    </div>
  )
}

export default MyApp;