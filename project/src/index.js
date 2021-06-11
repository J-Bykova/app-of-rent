import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {data} from './data';
import {settings} from './settings';
import {routes} from './routes';

ReactDOM.render(
  <React.StrictMode>
    <App settings={settings} routes={routes} data={data}/>
  </React.StrictMode>,
  document.getElementById('root'));
