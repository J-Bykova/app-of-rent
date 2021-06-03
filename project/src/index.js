import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {data} from './data';
import {settings} from './settings';

ReactDOM.render(
  <React.StrictMode>
    <App settings={settings} data={data}/>
  </React.StrictMode>,
  document.getElementById('root'));
