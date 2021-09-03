import React from 'react';
import {Link} from 'react-router-dom';
import HeaderSection from '../header-section/header-section';
import FooterSection from '../footer-section/footer-section';
import PropTypes from 'prop-types';

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

export default function NotFoundPage(props) {
  return (
    <div style={wrapperStyles}>
      <HeaderSection routes={props.routes} />
      <div style={textStyles}>
        <h1>Error 404</h1>
        <p>Page not found</p>
        <Link to={props.routes.MAIN}>Back to main</Link>
      </div>
      <FooterSection/>
    </div>
  );
}

NotFoundPage.propTypes = {
  routes: PropTypes.object.isRequired,
};
