import React, { useState } from "react";
import { testStack, parenthesisTestFunction } from "./StackTests";
import { TestVisualization } from "../TestFrameWork/testFunctions";

export const StackPage = () => {
  const [testResults, setTestResults] = useState([]);
  return (
    <div>
      <div>Text here about implementing the stack</div>
      <div>
        <div>Here a playground to play around with the stack</div>
        <StackVisualisation />
      </div>
      <div>
        <button onClick={() => setTestResults(testStack(Stack))}>
          Run tests on your stack
        </button>
        {testResults.length > 0 && TestVisualization(testResults)}
      </div>
      <ParenthesisTester />
    </div>
  );
};

const StackVisualisation = () => {
  const [stack, updateStack] = useState(new Stack());
  return (
    <div>
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
      <div>
        <div>Your stack looks like this:</div>
        <div>
          {stack
            .getStack()
            .slice()
            .reverse()
            .map((item, index) => (
              <div key={index}>{item}</div>
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
    <div>
      <div>Test your stack with parenthesis balance algorithm</div>
      <label htmlFor="parenthesis-input">Set your test string</label>
      <input
        id="parenthesis-input"
        type="string"
        value={testString}
        onChange={e => setTestSring(e.target.value)}
      />
      <button
        onClick={() => setSingleTestResult(checkParenthesisBalance(testString))}
      >
        Test your parenthesis balance function on the input above
      </button>
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
      {testResults.length > 0 && TestVisualization(testResults)}
    </div>
  );
};

class Stack {
  constructor(stack) {
    this.stack = stack ? stack.getStack() : [];
  }
  push(element) {
    this.stack.push(element);
  }
  pop() {
    return this.stack.pop();
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  getStack() {
    return this.stack;
  }
}

const checkParenthesisBalance = parenthesis => {
  const stack = new Stack();
  for (let i = 0; i < parenthesis.length; i++) {
    const current = parenthesis[i];
    if ((current === "{") | (current === "(") | (current === "[")) {
      stack.push(current);
    } else {
      const popped = stack.pop();
      if (
        (popped === "(" && current !== ")") ||
        (popped === "[" && current !== "]") ||
        (popped === "{" && current !== "}") ||
        !popped
      ) {
        return false;
      }
    }
  }
  return !stack.pop();
};
