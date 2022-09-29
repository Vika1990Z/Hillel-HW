// Напишите функцию, которая возвращает новый объект без указанных значений.

const without = function(object, ...args){
    let resultObj = {};
    for (let key in object) {
        if (!args.includes(key)) 
            resultObj[key]=object[key];
    }
    return resultObj;
  };
  

const data = { a: 1, b: 2, c: 3 };
console.log(without(data, 'b', 'c')); // { a: 1 }
console.log(data)  // {a: 1, b: 2, c: 3}


