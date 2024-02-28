const getRandomInt = (min, max) => {
  if (min > max) [min, max] = [max, min];
  min = Math.max(min, 0);
  max = Math.max(max, 0);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomFloat = (min, max, digits_num) => {
  if (min > max) [min, max] = [max, min];
  min = Math.max(min, 0);
  max = Math.max(max, 0);

  if (min === max) return min.toFixed(digits_num);

  const randomNumber = Math.random() * (1 + 10 ** -16);

  const extendedRandom = randomNumber < 1 ? randomNumber : 1;

  return (extendedRandom * (max - min) + min).toFixed(digits_num);
}
