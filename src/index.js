import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { GifApp } from './GifApp';
//import CovidInfo from './components/CovidInfo';

//api: 6jmEyv2X055hHRTsamg2tMc8NgyIywE8
// https://developers.giphy.com/docs/api/endpoint/#search

ReactDOM.render(
  //<CovidInfo />,
  <GifApp/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
