export default (lowerValue, upperValue) => {
  const randomInt = (Math.floor(Math.random() * (upperValue - lowerValue)) + lowerValue);
  return randomInt;
};
