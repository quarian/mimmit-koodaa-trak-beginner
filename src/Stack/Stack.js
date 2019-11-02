import React, { useState } from "react";
import { testStack } from "./StackTests";
import { logTestResults } from "../TestFrameWork/testFunctions";

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
        {testResults.length > 0 && logTestResults(testResults)}
      </div>
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
