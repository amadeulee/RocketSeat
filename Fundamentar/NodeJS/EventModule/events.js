const { EventEmitter } = require('events');

const ev = new EventEmitter();

ev.on('saySomething', () => {
  console.log('Eu disse aquilo');
});

ev.emit('saySomething');
