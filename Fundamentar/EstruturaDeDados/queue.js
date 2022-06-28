class Queue {
  constructor() {
    this.data = [];
    this.top = -1;
    this.control = 0;
  }

  enqueue(value) {
    this.data.push(value);
    console.log(`${value} adicionado`);
  }
  dequeue() {
    const item = this.data.shift();
    console.log(`${item} removido`);
  }
}

const fila = new Queue();

fila.enqueue(1);
fila.enqueue(2);
fila.enqueue(3);
fila.enqueue(4);

console.log(fila.data);
fila.dequeue();
fila.dequeue();
fila.dequeue();
console.log(fila.data);
console.log(fila.data.length);
fila.dequeue();
