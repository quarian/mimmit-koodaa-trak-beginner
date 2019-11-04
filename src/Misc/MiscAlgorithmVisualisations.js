import React, { useState } from "react";
import { findLongestSequence } from "./MiscAlgorithms";
import { testLongestSequence } from "./miscAlgorithmTests";

export const MiscAlgorithms = () => {
  return (
    <div>
      <div>
        Here are some miscellaneous algorithms for you to play with. Have fun!
      </div>
      <div></div>
    </div>
  );
};

const LongestSequence = () => {
  const [testSequence, setTestSequence] = useState("");
  const [testSequenceResult, setTestSequenceResult] = useState(0);
  const [testResult, setTestresult] = useState("Tests not run yet");
  return (
    <div>
      <div>Find the longest sequence of integers from an array.</div>

      <label htmlFor="testSequence">Set test sequnce for manual testing</label>
      <input
        type="text"
        id="testSequence"
        value={testSequence}
        onChange={event => setTestSequence(e.target.value)}
      />
      <button
        onClick={() => setTestSequenceResult(findLongestSequence(testSequence))}
      >
        Test your algorithm
      </button>
      <div>{`Your algorithm found a sequence of length ${testSequenceResult}`}</div>
      <button
        onClick={() => setTestresult(testLongestSequence(findLongestSequence))}
      >
        Run automated tests on your algorithm
      </button>
      <div>{testResult}</div>
    </div>
  );
};
