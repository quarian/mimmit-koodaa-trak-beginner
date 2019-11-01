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

export const logTestResults = testResults => {
  return (
    <div>
      {testResults.map(result => (
        <div>
          {result.match
            ? `Passed ${result.testName}`
            : `Failed ${result.testName}: ${result.errorMessage}`}
        </div>
      ))}
    </div>
  );
};
