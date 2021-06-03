import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from '../main-page/main-page.jsx';
import PropTypes from 'prop-types';
import FavoritesPage from '../favorites-page/favorites-page';
import LoginPage from '../login-page/login-page';
import NotFoundPage from '../not-found-page/not-found-page';

const routes = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
};
export default function App(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.Main}>
          <MainPage settings={props.settings} data={props.data}/>
        </Route>
        <Route exact path={routes.Login}>
          <LoginPage/>
        </Route>
        <Route exact path={routes.Favorites}>
          <FavoritesPage/>
        </Route>
        <Route>
          <NotFoundPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  data: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
};
