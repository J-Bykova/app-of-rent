import {loadRestData} from '../utils/loadRestData';

export function loadReviews(hotelId, limit) {
  return loadRestData(`https://7.react.pages.academy/six-cities/comments/${hotelId}`, mapDataToClientModel, limit);
}

function mapDataToClientModel(data) {
  return {
    id: data.id,
    comment: data.comment,
    date: data.date,
    rating: data.rating,
    user: {
      avatarUrl: data.user.avatar_url,
      isPro: data.user.is_pro,
      id: data.user.id,
      name: data.user.name,
    },
  };
}
