import React from 'react';
import OffersList from '../offers-list/offers-list.jsx';
import PropTypes from 'prop-types';
import HeaderSection from '../header-section/header-section';
import LocationsTabsSection from '../locations-tabs-section/locations-tabs-section';

export default function MainPage(props) {
  return (
    <div className="page page--gray page--main">
      <HeaderSection routes={props.routes}/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationsTabsSection/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <OffersList offers={props.offers} settings={props.settings} routes={props.routes}/>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

MainPage.propTypes = {
  offers: PropTypes.array.isRequired,
  routes: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
};
