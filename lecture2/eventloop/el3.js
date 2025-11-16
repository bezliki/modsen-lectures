async function a1() {
  console.log('1');
  try {
    const r = await a2();
    console.log('2', r);
  } catch (e) { console.log('3', e.message); }
}

async function a2() {
  console.log('4');
  await Promise.resolve()
    .then(() => console.log('5'));
  return 'ok';
}

setTimeout(() => console.log('6'), 0);
console.log('7');  //1
a1().then(() => console.log('8'));
Promise.resolve().then(() => console.log('9'));
console.log('10'); 

/*
// синхронный код
7
1
4
10
//микротаки
5
9
2 
ok
8
//макро
6


*/