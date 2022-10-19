//___________________task form HILLEL________________________
// Напишите функцию, которая делает поверхностную проверку объекта на пустоту.

// const isEmpty = function(object){
//     return Object.values(object).filter(el => !!el).length===0;
//   }
  
// const data = { a: 1, b: undefined };
// const data2 = { a: undefined };
// console.log(isEmpty(data)); // false
// console.log(isEmpty(data2)); // true




//___________________updated task________________________
// написати функцію, яка перевіряє чи в обʼєкті якісь властивості взагалі, 
// цикли та ітеруючі методи не використовувати


const isEmpty = object => Object.getOwnPropertyNames(object).length != 0;


const data = { a: 1, b: undefined };
const data2 = { a: undefined };
const data3 = {};
console.log(isEmpty(data)); // false
console.log(isEmpty(data2)); // true
console.log(isEmpty(data3)); // true