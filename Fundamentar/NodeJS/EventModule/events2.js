const { inherits } = require('util');
const { EventEmitter } = require('events');

function Character(name) {
  this.name = name;
}

inherits(Character, EventEmitter);

const amadeu = new Character('Amadeu');

amadeu.on('help', () => {
  console.log('Ele eh uma boa pessoa');
});

console.log('Quem eh o Amadeu?');
amadeu.emit('help');
