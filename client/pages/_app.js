import '../styles/global.css';
import TopNavComponent from '../components/top-nav/top-nav.component';
export default ({ Component, pageProps }) => {
  return (
    <div className='h-screen flex flex-col'>
        <TopNavComponent />
        <Component {...pageProps} />
    </div>
  )
}