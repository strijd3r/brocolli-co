import React from 'react';
import ReactDOM from 'react-dom';
import { Application } from './components/layout';

ReactDOM.render(
  <React.StrictMode>
    <Application>body</Application>
  </React.StrictMode>,
  document.getElementById('root')
);

/**
 * reportWebVitals 
 * @param {Function} onPerfEntry Object containing the metadata for the onPerEntry event
 */
function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
