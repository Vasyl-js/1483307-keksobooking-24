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

export {getRandomIntInclusive, getRandomArbitrary};
