export const testLongestSequence = longestSequenceFunction => {
  const array = "aabcccdeeeeeee";
  const longestSequence = longestSequenceFunction(array);
  return longestSequence === 6
    ? `Successful test run on ${array}`
    : `Test failed on ${array}`;
};
