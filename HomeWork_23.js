// Напишите функцию, которая возвращает вложенный массив вида [[key, value], [key, value]].

const makePairs = function(object){
    let result = [];
    for(let i=0; i < Object.keys(object).length; i++) {
        result.push([Object.keys(object)[i], Object.values(object)[i]]);
    }
    return result;
}
const data = { a: 1, b: 2 };
console.log(makePairs(data)); // [['a', 1], ['b', 2]]
     
