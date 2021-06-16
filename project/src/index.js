import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers, loadOffers} from './mocks/offers';
import {settings} from './settings';
import {routes} from './routes';

loadOffers(1).then((res) => {
  // eslint-disable-next-line no-console
  console.log(res);

  ReactDOM.render(
    <React.StrictMode>
      <App
        settings={settings}
        routes={routes}
        offers={offers}
      />
    </React.StrictMode>,
    document.getElementById('root'),
  );
});


