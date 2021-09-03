import {loadRestData} from '../utils/loadRestData';

export function loadOffers(limit) {
  return loadRestData('https://7.react.pages.academy/six-cities/hotels', mapDataToClientModel, limit);
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
