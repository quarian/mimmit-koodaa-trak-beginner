import React from "react";

export const TestVisualisation = testResults => {
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
