import React from 'react';
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import NProgress from "nprogress"
import Router from "next/router";


import { store, wrapper } from '../state/store';
import '../styles/global.css';
import '../styles/result-basic.css';
import "nprogress/nprogress.css";
import TopNavComponent from '../components/top-nav/top-nav.component';

const MyApp = ({ Component, pageProps }) => {

  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);



    return () => {
      // Make sure to remove the event handler on unmount!
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);

    };
  }, []);


  return (
    <div className='h-screen flex flex-col bg-light-blue2'>
      <Provider store={store}>
        {/* <TopNavComponent /> */}
        <Component {...pageProps} />
        </Provider>
    </div>
  )
}

export default MyApp;