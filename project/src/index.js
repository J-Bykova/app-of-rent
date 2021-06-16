import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {loadOffers} from './mocks/offers';
import {settings} from './settings';
import {routes} from './routes';

async function main() {
  const offers = await loadOffers(settings.CARDS_COUNT);
  // eslint-disable-next-line no-console
  console.log(offers);

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
}

main();
