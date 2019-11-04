export const findLongestSequence = arrayLike => {
  let currentSequence = 0;
  let longetsSequence = 0;
  let currentElement = "";
  let previousElement = "";
  for (let i = 0; i < arrayLike.length; i++) {
    currentElement = arrayLike[i];
    if (previousElement === "" || currentElement === previousElement) {
      currentSequence += 1;
    } else if (currentElement !== previousElement) {
      if (currentSequence > longetsSequence) {
        longetsSequence = currentSequence;
      }
      currentSequence = 1;
    }
    previousElement = currentElement;
  }
  return longetsSequence > currentSequence ? longetsSequence : currentSequence;
};
