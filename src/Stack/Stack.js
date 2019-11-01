import React from "react";

export const StackPage = () => <div>STACKS</div>;

export class Stack {
  constructor() {
    this.stack = [];
  }
  push(element) {
    this.stack.push(element);
  }
  pop() {
    this.stack.pop();
  }
}
