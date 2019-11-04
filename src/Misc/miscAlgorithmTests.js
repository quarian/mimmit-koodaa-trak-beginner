export const testLongestSequenceAlgorithm = longestSequenceFunction => [
  testLongestSequenceAtEnd(longestSequenceFunction),
  testLongestSequenceAtBeginning(longestSequenceFunction),
  testLongestSequenceInMiddle(longestSequenceFunction)
];

const testLongestSequenceAtEnd = longestSequenceFunction => {
  const array = "aabcccdeeeeeee";
  const longestSequence = longestSequenceFunction(array);
  return longestSequence === 7
    ? `Successful test run on ${array}`
    : `Test failed on ${array}`;
};

const testLongestSequenceAtBeginning = longestSequenceFunction => {
  const array = "vvvvvvvaabcccdeeeee";
  const longestSequence = longestSequenceFunction(array);
  return longestSequence === 7
    ? `Successful test run on ${array}`
    : `Test failed on ${array}`;
};

const testLongestSequenceInMiddle = longestSequenceFunction => {
  const array = "aabccvvvvvvvcdeeeee";
  const longestSequence = longestSequenceFunction(array);
  return longestSequence === 7
    ? `Successful test run on ${array}`
    : `Test failed on ${array}`;
};
