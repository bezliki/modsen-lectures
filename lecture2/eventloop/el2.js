Promise.resolve("resolve")
  .then(v => {
    console.log(1, v);
    return "Tnen1";
  })
  .then(v => {
    console.log(2, v);
    return new Promise(res => {
      console.log(3, "start");
      setTimeout(() => res("Next"), 0);
    });
  })
  .then(v => {
    console.log(4, v);
    throw new Error("Boom");
  })
  .catch(e => {
    console.log(5, e.message);
    return "R";
  })
  .finally(() => {
    console.log(6, "finally-1");
  })
  .then(v => {
    console.log(7, v);
    return Promise.reject("Fail");
  })
  .catch(e => {
    console.log(8, e);
  })
  .finally(() => console.log(9, "finally-2"));

  /*
  1 resolve
  2 Rnen1
  3 start
  4 next
  5 BOOm
  6 finally-1
  7 R
  8 Fail
  9 finally-2

   */