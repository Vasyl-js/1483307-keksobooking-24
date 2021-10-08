//Функция, возвращающая случайное целое число из переданного диапазона включительно
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
getRandomIntInclusive();


//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
//https://qna.habr.com/q/999157
function getRandomArbitrary(min, max, maxDigits = 1) {
  if (min > max || min < 0 || max <= 0) {
    return ('Задан неверный диапазон! Укажите другие числа.');
  }

  const digitsDegree = 10 ** maxDigits;
  return ~~((Math.random() * (max - min) + min) * digitsDegree) / digitsDegree;
}
getRandomArbitrary();
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

