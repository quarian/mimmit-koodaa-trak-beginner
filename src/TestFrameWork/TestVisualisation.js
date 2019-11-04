import React from "react";
import "./TestVisualisation.css";

export const TestVisualisation = testResults => {
  return (
    <div className="TestResultContainer">
      {testResults.map((result, index) => (
        <div key={index}>
          {result.match ? (
            <span className="ResultRow">
              <span>Passed &#9989;</span>
              <span>{result.testName}</span>
            </span>
          ) : (
            <span className="ResultRow">
              <span>Failed &#10060;</span>{" "}
              <span>
                ${result.testName}: ${result.errorMessage}`
              </span>
            </span>
          )}
        </div>
      ))}
    </div>
  );
};
