// Напишите функцию, которая делает поверхностную проверку объекта на пустоту.

const isEmpty = function(object){
    return Object.values(object).filter(el => !!el).length===0;
  }
  
const data = { a: 1, b: undefined };
const data2 = { a: undefined };
console.log(isEmpty(data)); // false
console.log(isEmpty(data2)); // true

