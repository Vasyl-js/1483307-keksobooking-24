const LOCATION_LAT_FROM = 35.65000;
const LOCATION_LAT_TO = 35.70000;
const LOCATION_LNG_FROM = 139.70000;
const LOCATION_LNG_TO = 139.80000;
const location = {
  lat: getRandomArbitrary(LOCATION_LAT_FROM, LOCATION_LAT_TO, 5),
  lng: getRandomArbitrary(LOCATION_LNG_FROM, LOCATION_LNG_TO, 5),
};

//не сделал условия. Перед однозначными числами ставится 0. Например, 01, 02...10. Адреса изображений не повторяются.
const AUTHOR = {
  avatar: `img/avatars/user${getRandomIntInclusive(1, 10)}.png`,
};
AUTHOR;

const TYPE_OF_HOUSES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKINS_CHECKOUTS = ['12:00', '13:00', '14:00'];

const offer = {
  title: 'Welcome',
  address: location,
  price: getRandomIntInclusive(1, 100),
  type: TYPE_OF_HOUSES[getRandomIntInclusive(0, 4)],
  rooms: getRandomIntInclusive(1, 10),
  guests: getRandomIntInclusive(1, 10),
  checkin: CHECKINS_CHECKOUTS[getRandomIntInclusive(0, 2)],
  checkout: CHECKINS_CHECKOUTS[getRandomIntInclusive(0, 2)],
  features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
  description: 'В новой квартире есть где развернуться, она в новом доме, в престижном районе, и рядом расположены садик и школа.',
  photos: ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'],
};
offer;
export {LOCATION_LAT_FROM, LOCATION_LAT_TO, LOCATION_LNG_FROM, LOCATION_LNG_TO, location, AUTHOR, TYPE_OF_HOUSES, CHECKINS_CHECKOUTS, offer};
