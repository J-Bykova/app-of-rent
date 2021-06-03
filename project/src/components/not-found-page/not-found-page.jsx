import React from 'react';
import HeaderSection from '../header-section/header-section';
import FooterSection from '../footer-section/footer-section';

export default function NotFoundPage() {
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
      <HeaderSection/>
      <div style={textStyles}>
        <h1>Error 404</h1>
        <p>Page not found</p>
      </div>
      <FooterSection/>
    </div>
  );
}
