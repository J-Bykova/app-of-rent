import React from 'react';

export default function OfferGallery(props) {
  return (
    <div className="property__gallery">
      <div className="property__image-wrapper">
        <img className="property__image" src="/img/room.jpg" alt="Photo studio"/>
      </div>
      <div className="property__image-wrapper">
        <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio"/>
      </div>
      <div className="property__image-wrapper">
        <img className="property__image" src="img/apartment-02.jpg" alt="Photo studio"/>
      </div>
      <div className="property__image-wrapper">
        <img className="property__image" src="img/apartment-03.jpg" alt="Photo studio"/>
      </div>
      <div className="property__image-wrapper">
        <img className="property__image" src="img/studio-01.jpg" alt="Photo studio"/>
      </div>
      <div className="property__image-wrapper">
        <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio"/>
      </div>
    </div>
  );
}
