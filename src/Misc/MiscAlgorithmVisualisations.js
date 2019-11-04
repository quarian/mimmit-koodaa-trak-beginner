import React, { useState } from "react";
import { findLongestSequence } from "./miscAlgorithms";
import { testLongestSequenceAlgorithm } from "./miscAlgorithmTests";

export const MiscAlgorithmsPage = () => {
  return (
    <div>
      <div>
        Here are some miscellaneous algorithms for you to play with. Have fun!
      </div>
      <LongestSequence />
    </div>
  );
};

const LongestSequence = () => {
  const [testSequence, setTestSequence] = useState("");
  const [testSequenceResult, setTestSequenceResult] = useState(0);
  const [testResults, setTestresults] = useState(["Tests not run yet"]);
  return (
    <div>
      <div>Find the longest sequence of integers from an array.</div>

      <label htmlFor="testSequence">Set test sequnce for manual testing</label>
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
      <div>{`Your algorithm found a sequence of length ${testSequenceResult}`}</div>
      <button
        onClick={() =>
          setTestresults(testLongestSequenceAlgorithm(findLongestSequence))
        }
      >
        Run automated tests on your algorithm
      </button>
      <div>
        {testResults.map(result => (
          <div>{result}</div>
        ))}
      </div>
    </div>
  );
};
