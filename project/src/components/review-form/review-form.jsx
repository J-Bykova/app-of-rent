import React from 'react';

const stars = [{
  id: '5-stars',
  value: 5,
  title: 'perfect',
}, {
  id: '4-stars',
  value: 4,
  title: 'good',
}, {
  id: '3-stars',
  value: 3,
  title: 'not bad',
}, {
  id: '2-stars',
  value: 2,
  title: 'badly',
}, {
  id: '1-star',
  value: 1,
  title: 'terribly',
}];

export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: '',
      review: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  handleFieldChange(evt) {
    const {name, value} = evt.target;
    this.setState({[name]: value});
  }

  render() {
    return (
      <form className="reviews__form form" action="#" method="post" onSubmit={this.handleSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {stars.map((star) => (
            <React.Fragment key={star.id}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={star.value}
                id={star.id}
                type="radio"
                onChange={this.handleFieldChange}
              />
              <label
                className="reviews__rating-label form__rating-label"
                htmlFor={star.id}
                title={star.title}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </React.Fragment>
          ))}
        </div>
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          onChange={this.handleFieldChange}
        />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set
            <span className="reviews__star">rating</span>
            and describe your stay with at least
            <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
        </div>
      </form>
    );
  }
}

