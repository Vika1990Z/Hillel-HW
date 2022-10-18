const myObjectAssign = (...objects) => objects.reduce((acc, curObject) => ({ ...acc, ...curObject }));

console.log(myObjectAssign({ a: 1 })); // { a: 1 }
console.log(myObjectAssign({ a: 1 }, { b: 2 })); // { a: 1, b: 2 }
console.log(myObjectAssign({ a: 1, b: 2 }, { b: 3 }, { a: 4, c: 5 })); // { a: 4, b: 3, c: 5 }
