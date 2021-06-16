
export function loadOffers(limit) {
  return fetch('https://7.react.pages.academy/six-cities/hotels')
    .then((response) => response.json())
    .then((json) => json.slice(0, limit))
    .then((data) => data.map(mapDataToClientModel));
}

function mapDataToClientModel(data) {
  return {
    id: data.id,
    isPremium: data.is_premium,
    previewImage: data.preview_image,
    price: data.price,
    title: data.title,
    type: data.type,
    isFavorite: data.is_favorite,
    rating: data.rating,
  };
}
