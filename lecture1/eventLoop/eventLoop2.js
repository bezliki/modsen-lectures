const fs = require("fs");

console.log("START"); //1

setTimeout(() => {
  setImmediate(() => console.log("add setImmediate"));//7

  console.log("setTimeout 1"); //4
}, 0);

setImmediate(() => console.log("setImmediate")); //6

process.nextTick(() => console.log("Next Tick")); //3

setTimeout(() => console.log("setTimeout 2"), 0); //5

fs.readFile(__filename, () => {
  setTimeout(() => console.log("readFile setTimeout"), 0);//10
  setImmediate(() => console.log("readFile setImmediate"));//9
  process.nextTick(() => console.log("readFile Next Tick"));//8
});

console.log("END");//2

// START
// END
// Next Tick
// setTimeout 1
// setTimeout 2
// setImmediate
// add setImmediate
// readFile Next Tick
// readFile setImmediate
// readFile setTimeout
