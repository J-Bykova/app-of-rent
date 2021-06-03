import React from 'react';
import MainPage from '../main-page/main-page.jsx';
import PropTypes from 'prop-types';
import FavoritesPage from '../favorites-page/favorites-page';
import LoginPage from '../login-page/login-page';
import NotFoundPage from '../not-found-page/not-found-page';

export default function App(props) {
  return (
    <>
      <NotFoundPage/>
      <LoginPage/>
      <FavoritesPage/>
      <MainPage settings={props.settings} data={props.data}/>
    </>
  );
}

App.propTypes = {
  data: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
};
