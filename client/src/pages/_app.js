import { wrapper } from '../state/store';
import '../styles/global.css';
import TopNavComponent from '../components/top-nav/top-nav.component';
const MyApp = ({ Component, pageProps }) => {
  return (
    <div className='h-screen flex flex-col'>
        <TopNavComponent />
        <Component {...pageProps} />
    </div>
  )
}

export default wrapper.withRedux(MyApp);