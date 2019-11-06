import React, { useState } from "react";
import { testStack, parenthesisTestFunction } from "./StackTests";
import { TestVisualisation } from "../TestFrameWork/TestVisualisation";
import { Stack, checkParenthesisBalance } from "./Stack";

import "./StackVisualisation.css";

export const StackPage = () => {
  const [testResults, setTestResults] = useState([]);
  return (
    <div className="StackContainer">
      <h1>Stacks are a classic data structure</h1>
      <h2>
        They date way back to the beginning of computer science, and are still
        useful nowadays
      </h2>
      <div>
        <button onClick={() => setTestResults(testStack(Stack))}>
          Run tests on your stack
        </button>
        {testResults.length > 0 && TestVisualisation(testResults)}
      </div>
      <ParenthesisTester />
      <div>
        <h3>Here a playground to play around with the stack</h3>
        <StackVisualisation />
      </div>
    </div>
  );
};

const StackVisualisation = () => {
  const [stack, updateStack] = useState(new Stack());
  return (
    <div className="StackVisualisation">
      <button
        onClick={() => {
          const newStack = new Stack(stack);
          newStack.push(Math.floor(Math.random() * 11));
          updateStack(newStack);
        }}
      >
        Push random number into the stack!
      </button>
      <button
        onClick={() => {
          const newStack = new Stack(stack);
          newStack.pop();
          updateStack(newStack);
        }}
      >
        Pop the stack
      </button>
      <h4>Your stack looks like this:</h4>
      <div className="Stack">
        <div>
          {stack
            .getStack()
            .slice()
            .reverse()
            .map((item, index) => (
              <p key={index} className="StackItem">
                {item}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

const ParenthesisTester = () => {
  const [testString, setTestSring] = useState("");
  const [singleTestResult, setSingleTestResult] = useState(false);
  const [testResults, setTestResults] = useState([]);
  return (
    <div className="ParenthesisTester">
      <h3>Test your stack with parenthesis balance algorithm</h3>
      <label htmlFor="parenthesis-input">Set your test string</label>
      <input
        id="parenthesis-input"
        type="string"
        value={testString}
        onChange={e => setTestSring(e.target.value)}
      />
      <div>
        <button
          onClick={() =>
            setSingleTestResult(checkParenthesisBalance(testString))
          }
        >
          Test your parenthesis balance function on the input above
        </button>
      </div>
      <div>
        {singleTestResult
          ? `The parenthesis are balanced!`
          : "The parenthesis are unbalanced or test not run"}
      </div>
      <button
        onClick={() =>
          setTestResults(parenthesisTestFunction(checkParenthesisBalance))
        }
      >
        Run automated test on your balacne algorithm
      </button>
      {testResults.length > 0 && TestVisualisation(testResults)}
    </div>
  );
};
