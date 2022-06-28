class Stack {
  constructor() {
    this.data = [];
    this.top = -1;
  }
  push(value) {
    this.top++;
    this.data[this.top] = value;
    return this.data;
  }
  pop() {
    if (this.top < 0) return undefined;
    const removedValue = this.data[this.top];
    delete this.data[this.top];
    this.top--;
    return removedValue;
  }
  peek() {
    return this.top >= 0 ? this.data[this.top] : undefined;
  }
  size() {
    return this.top + 1;
  }
}

const stack = new Stack();

stack.push('Amadeu');
stack.push('Joao');
stack.push('Vitor');

console.log(stack.data);
console.log(stack.pop());
console.log(stack.size());
console.log(stack);
