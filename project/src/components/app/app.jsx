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
        <Route exact path={props.settings.routes.MAIN}>
          <MainPage settings={props.settings} data={props.data}/>
        </Route>
        <Route exact path={props.settings.routes.LOGIN}>
          <LoginPage settings={props.settings} />
        </Route>
        <Route exact path={props.settings.routes.FAVORITES}>
          <FavoritesPage settings={props.settings} />
        </Route>
        <Route exact path={props.settings.routes.OFFER}>
          <PropertyPage settings={props.settings} />
        </Route>
        <Route>
          <NotFoundPage settings={props.settings}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  data: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
};
