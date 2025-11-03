const fs = require('fs');

console.log('START');

setTimeout(() => console.log('setTimeout 1'), 0);

setImmediate(() => console.log('setImmediate'));

process.nextTick(() => console.log('Next Tick'));

setTimeout(() => console.log('setTimeout 2'), 0);

fs.readFile(__filename, () => {
   setTimeout(() => console.log('readFile setTimeout'), 0);
   setImmediate(() => console.log('readFile setImmediate'));
   process.nextTick(() => console.log('readFile Next Tick'));
});

console.log('END');


//start
//  end 
//  Next Tick 
// setImmediate 
// setTimeout 1 
// setTimeout 2
// readFile Next Tick 
// readFile setImmediate
// readFile setTimeout