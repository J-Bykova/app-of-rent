export function loadOffers(limit) {
  fetch('https://7.react.pages.academy/six-cities/hotels')
    .then((response) => response.json())
    .then((json) => json.slice(0, 5))
    // eslint-disable-next-line no-console
    .then((data) => console.log(data));
  return fetch('https://7.react.pages.academy/six-cities/hotels')
    .then((response) => response.json())
    .then((json) => json.slice(0, limit))
    .then((data) => data.map(mapDataToClientModel));
}

const facilityTypeDictionary = {
  'apartment': 'Apartment',
  'room': 'Private Room',
  'house': 'House',
  'hotel': 'Hotel',
};

function mapDataToClientModel(data) {
  return {
    id: data.id,
    isPremium: data.is_premium,
    previewImage: data.preview_image,
    price: data.price,
    title: data.title,
    type: facilityTypeDictionary[data.type],
    isFavorite: data.is_favorite,
    rating: data.rating,
    host: {
      avatarUrl: data.host.avatar_url,
      id: data.host.id,
      isPro: data.host.is_pro,
      name: data.host.name,
    },
    bedrooms: data.bedrooms,
    maxAdults: data.max_adults,
  };
}
