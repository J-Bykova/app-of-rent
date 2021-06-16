import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from '../main-page/main-page.jsx';
import PropTypes from 'prop-types';
import FavoritesPage from '../favorites-page/favorites-page';
import PropertyPage from '../property-page/property-page';
import LoginPage from '../login-page/login-page';
import NotFoundPage from '../not-found-page/not-found-page';

export default function App(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={props.routes.MAIN}>
          <MainPage settings={props.settings} routes={props.routes} offers={props.offers}/>
        </Route>
        <Route exact path={props.routes.LOGIN}>
          <LoginPage settings={props.settings} routes={props.routes}/>
        </Route>
        <Route exact path={props.routes.FAVORITES}>
          <FavoritesPage settings={props.settings} routes={props.routes}/>
        </Route>
        <Route exact path={props.routes.OFFER}>
          <PropertyPage settings={props.settings} routes={props.routes}/>
        </Route>
        <Route>
          <NotFoundPage routes={props.routes}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: PropTypes.array.isRequired,
  settings: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired,
};
