const output = require('./flag');

console.log(output(process.argv[2]), output(process.argv[4]));
console.log(`OI ${output('--name')}. ${output('--greting')}`);
