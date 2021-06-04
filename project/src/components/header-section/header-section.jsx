import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export default function HeaderSection(props) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={props.settings.routes.MAIN} className="header__logo-link" href="main.html">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link to={props.settings.routes.FAVORITES} className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                </Link>
              </li>
              <li className="header__nav-item">
                <Link to={props.settings.routes.LOGIN} className="header__nav-link" href="#">
                  <span className="header__signout">Sign out</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

HeaderSection.propTypes = {
  settings: PropTypes.object.isRequired,
};
