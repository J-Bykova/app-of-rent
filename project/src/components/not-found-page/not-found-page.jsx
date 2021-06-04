import React from 'react';
import {Link} from 'react-router-dom';
import HeaderSection from '../header-section/header-section';
import FooterSection from '../footer-section/footer-section';
import PropTypes from 'prop-types';

export default function NotFoundPage(props) {
  const wrapperStyles = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };
  const textStyles = {
    textAlign: 'center',
    marginTop: '50px',
  };
  return (
    <div style={wrapperStyles}>
      <HeaderSection settings={props.settings} />
      <div style={textStyles}>
        <h1>Error 404</h1>
        <p>Page not found</p>
        <Link to={props.settings.routes.MAIN}>Back to main</Link>
      </div>
      <FooterSection/>
    </div>
  );
}

NotFoundPage.propTypes = {
  settings: PropTypes.object.isRequired,
};
