console.log('A: sync start');

setTimeout(() => {
  console.log('E: setTimeout 0');
}, 0);

Promise.resolve().then(() => {
  console.log('C: promise.then');
});

queueMicrotask(() => {
  console.log('D: queueMicrotask');
});

process.nextTick(() => {
  console.log('B: nextTick');
});

console.log('F: sync end');


//A F B C D E


let count = 0;

function tickStorm(limit = 5) {
  if (count >= limit) return;
  process.nextTick(() => {
    console.log(`A: nextTick #${++count}`);
    tickStorm(limit);
  });
}

setTimeout(() => {
  console.log('B: setTimeout 0 (should not be starved)');
}, 0);

Promise.resolve().then(() => {
  console.log('C: promise.then (microtask)');
});

console.log('D: sync start');
tickStorm(5);
console.log('E: sync end');


//D E A A A A A C B
