import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {loadOffers} from './mocks/offers';
import {settings} from './settings';
import {routes} from './routes';

loadOffers(settings.CARDS_COUNT).then((offers) => {
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


