import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <div className='min-h-full grid bg-light-blue2 '>
      <Component {...pageProps} />
      </div>
  );
}

export default MyApp
