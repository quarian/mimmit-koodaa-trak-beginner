import React, { useState } from "react";
import { findLongestSequence } from "./miscAlgorithms";
import { testLongestSequenceAlgorithm } from "./miscAlgorithmTests";

import "./MiscAlgorithmVisualisations.css";

export const MiscAlgorithmsPage = () => {
  return (
    <div className="MiscAlgorithmsContainer">
      <h1>
        Here are some miscellaneous algorithms for you to play with. Have fun!
      </h1>
      <LongestSequence />
    </div>
  );
};

const LongestSequence = () => {
  const [testSequence, setTestSequence] = useState("");
  const [testSequenceResult, setTestSequenceResult] = useState(0);
  const [testResults, setTestresults] = useState(["Tests not run yet"]);
  return (
    <div className="MiscAlgorithm">
      <h2>Find the longest sequence of integers from an array.</h2>

      <label htmlFor="testSequence">Set test sequence for manual testing</label>
      <input
        type="text"
        id="testSequence"
        value={testSequence}
        onChange={e => setTestSequence(e.target.value)}
      />
      <button
        onClick={() => setTestSequenceResult(findLongestSequence(testSequence))}
      >
        Test your algorithm
      </button>
      <h3>{`Your algorithm found a sequence of length ${testSequenceResult}`}</h3>
      <button
        onClick={() =>
          setTestresults(testLongestSequenceAlgorithm(findLongestSequence))
        }
      >
        Run automated tests on your algorithm
      </button>
      <div>
        {testResults.map(result => (
          <h4>{result}</h4>
        ))}
      </div>
    </div>
  );
};
