import React from "react";
import { isEqual } from "lodash";

export const testEquality = (result, expected, testName) => {
  const match = isEqual(result, expected);
  return {
    testName,
    match,
    errorMessage: `Expected ${expected}, was ${result}`
  };
};

export const testSorting = (sortedCandidate, testName) => {
  let isSorted = true;
  let failIndex = -1;
  for (let i = 1; i < sortedCandidate.length; i++) {
    if (sortedCandidate[i] < sortedCandidate[i - 1]) {
      isSorted = false;
      failIndex = i;
      break;
    }
  }
  return {
    testName,
    match: isSorted,
    errorMessage: `Array not sorted, first failing index: ${failIndex}, failed on array: ${sortedCandidate}`
  };
};

export const logTestResults = testResults => {
  return (
    <div>
      {testResults.map((result, index) => (
        <div key={index}>
          {result.match
            ? `Passed ${result.testName}`
            : `Failed ${result.testName}: ${result.errorMessage}`}
        </div>
      ))}
    </div>
  );
};
