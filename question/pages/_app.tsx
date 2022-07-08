import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor} from '../redux/store';


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <div className='min-h-screen grid bg-light-blue2 '>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default MyApp
