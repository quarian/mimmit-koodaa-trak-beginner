import React, { useState } from "react";
import { testStack } from "./StackTests";
import { logTestResults } from "../TestFrameWork/testFunctions";

export const StackPage = () => {
  const [testResults, setTestResuls] = useState([]);
  return (
    <div>
      <div>Text here about implementing the stack</div>
      <div>Here a playground to play around with the stack</div>
      <div>
        <button onClick={() => setTestResuls(testStack(Stack))}>
          Run tests on your stack
        </button>
        {testResults.length > 0 && logTestResults(testResults)}
      </div>
    </div>
  );
};

class Stack {
  constructor() {
    this.stack = [];
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
