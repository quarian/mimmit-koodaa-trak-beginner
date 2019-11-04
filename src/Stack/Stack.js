export class Stack {
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

export const checkParenthesisBalance = parenthesis => {
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
