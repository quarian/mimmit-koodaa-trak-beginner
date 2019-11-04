export const generateRandomArray = (length, minValue, maxValue) => {
  let array = new Array(length);
  for (let i = 0; i < length; i++) {
    array[i] = Math.floor(Math.random() * (maxValue - minValue) + minValue);
  }
  return array;
};

export const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

export const cloneArray = array => {
  return array.slice(0);
};
