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