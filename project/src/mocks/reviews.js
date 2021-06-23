import {loadRestData} from '../utils/loadRestData';

export function loadReviews(hotelId, limit) {
  return loadRestData(`https://7.react.pages.academy/six-cities/comments/${hotelId}`, mapDataToClientModel, limit);
}

function mapDataToClientModel(data) {
  return data;
}
