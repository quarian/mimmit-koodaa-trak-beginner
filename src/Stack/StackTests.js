import { testEquality } from "../TestFrameWork/testFunctions";

export const testStack = stackClass => {
  const pushResult = testPush(stackClass);
  return [pushResult];
};

const testPush = stackClass => {
  const stack = new stackClass();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  return testEquality(stack.stack, [1, 2, 3], "Test push operation");
};
