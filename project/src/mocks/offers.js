
export function loadOffers(limit) {
  return fetch('https://7.react.pages.academy/six-cities/hotels')
    .then((response) => response.json())
    .then((json) => json.slice(0, limit));
}

export const offers = [{
  id: 1,
  isPremium: true,
  previewImage: '../img/apartment-01.jpg',
  price: 120,
  title: 'Beautiful & luxurious apartment at great location',
  type: 'apartment',
  isFavorite: false,
  rating: 100,
}, {
  id: 2,
  isPremium: false,
  previewImage: '../img/room.jpg',
  price: 80,
  title: 'Wood and stone place',
  type: 'room',
  isFavorite: true,
  rating: 80,
}, {
  id: 3,
  isPremium: false,
  previewImage: '../img/apartment-02.jpg',
  price: 132,
  title: 'Canal View Prinsengracht',
  type: 'apartment',
  isFavorite: false,
  rating: 60,
}, {
  id: 4,
  isPremium: true,
  previewImage: '../img/apartment-03.jpg',
  price: 180,
  title: 'Nice, cozy, warm big bed apartment',
  type: 'apartment',
  isFavorite: false,
  rating: 50,
}, {
  id: 5,
  isPremium: false,
  previewImage: '../img/room.jpg',
  price: 80,
  title: 'Wood and stone place',
  type: 'room',
  isFavorite: true,
  rating: 100,
}];
