//___________________task form HILLEL________________________
// Напишите функцию, которая возвращает вложенный массив вида [[key, value], [key, value]].

// const makePairs1 = function(object){
//     let result = [];
//     for(let i=0; i < Object.keys(object).length; i++) {
//         result.push([Object.keys(object)[i], Object.values(object)[i]]);
//     }
//     return result;
// }
// const data1 = { a: 1, b: 2 };
// console.log(makePairs1(data1)); // [['a', 1], ['b', 2]]
     




//___________________updated task________________________
// переписати не використовуючи методи Object.keys() та Object.values()
const makePairs = obj => Object.entries(obj);

const data = { a: 1, b: 2 };
console.log(makePairs(data));