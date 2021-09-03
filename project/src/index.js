import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {loadOffers} from './mocks/offers';
import {settings} from './settings';
import {routes} from './routes';
import {loadReviews} from './mocks/reviews';

async function main() {
  const offers = await loadOffers(settings.CARDS_COUNT);
  const reviews = {};

  for (const offer of offers) {
    reviews[offer.id] = await loadReviews(offer.id, 5);
  }

  ReactDOM.render(
    <React.StrictMode>
      <App
        settings={settings}
        routes={routes}
        offers={offers}
        reviews={reviews}
      />
    </React.StrictMode>,
    document.getElementById('root'),
  );
}

main();
