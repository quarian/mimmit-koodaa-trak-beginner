import { testEquality } from "../TestFrameWork/testFunctions";

export const testStack = stackClass => {
  const pushResult = testPush(stackClass);
  const popResult = testPop(stackClass);
  return [pushResult, popResult];
};

const testPush = stackClass => {
  const stack = new stackClass();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  return testEquality(stack.getStack(), [1, 2, 3], "Test push operation");
};

const testPop = stackClass => {
  const stack = new stackClass();
  const shouldBeUndefined = stack.pop();
  const shouldBeUndefinedResult = testEquality(
    shouldBeUndefined,
    undefined,
    "Empty stack pop should return undefined"
  );
  if (!shouldBeUndefinedResult.match) {
    return shouldBeUndefinedResult;
  }
  stack.push(1);
  stack.push(2);
  stack.push(3);
  while (stack.peek()) {
    const top = stack.peek();
    const popped = stack.pop();
    const popTest = testEquality(popped, top, "Testing popping from the stack");
    if (!popTest.match) {
      return popTest;
    }
  }
  return testEquality(
    stack.getStack(),
    [],
    "Stack should be empty after pushing 3 and popping 3"
  );
};
