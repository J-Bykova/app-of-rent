import React from 'react';
import PropTypes from 'prop-types';

export default function Review(props) {
  const date = new Date(props.data.date);
  const localDate = date.toLocaleString('default', { day: 'numeric', month: 'long' });
  const utcDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={props.data.user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">{props.data.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${100 / 5 * props.data.rating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {props.data.comment}
        </p>
        <time className="reviews__time" dateTime={utcDate}>{localDate}</time>
      </div>
    </li>
  );
}

Review.propTypes = {
  data: PropTypes.object.isRequired,
};
