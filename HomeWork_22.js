//___________________task form HILLEL________________________
// Напишите функцию, которая поверхностно сравнивает два объекта.

// const isEqual = function(firstObject, secondObject){
//     if (Object.keys(firstObject).length !== Object.keys(secondObject).length) return false;
//     else {
//         for (let i=0; i<Object.keys(firstObject).length; i++) {
//             if (Object.keys(firstObject)[i] !== Object.keys(secondObject)[i] || Object.values(firstObject)[i] !== Object.values(secondObject)[i]) return false;
//         }
//     }
//     return true;

// } 

  
// const data = { a: 1, b: 1 };
// const data2 = { a: 1, b: 1 };
// const data3 = { a: 1, b: 2 };
// const data4 = { a: 1, c: 1 };
// const data5 = { a: 1, b: 1, c: 1 };
// console.log(isEqual(data, data2)); // true
// console.log(isEqual(data, data3)); // false
// console.log(isEqual(data, data4)); // false
// console.log(isEqual(data, data5)); // false


//___________________updated task________________________
// написати функцію, яка перевіряє чи рівні обʼєкти за значенням; обʼєкти можуть мати вкладені обʼекти
const isEqual = (firstObj, secondObj) => JSON.stringify(firstObj) === JSON.stringify(secondObj)  
const data = { a: 1, b: 1 };
const data2 = { a: 1, b: 1 };
const data3 = { a: 1, b: 2 };
const data4 = { a: 1, c: 1 };
const data5 = { a: 1, b: 1, c: 1 };

// console.log(isEqual(data, data2)); // true
// console.log(isEqual(data, data3)); // false
// console.log(isEqual(data, data4)); // false
// console.log(isEqual(data, data5)); // false
// console.log(isEqual(data6, data7)); // false



// recursion
const isEqual3 = (firstObj, secondObj) => {
    if (Object.keys(firstObj).length != Object.keys(secondObj).length) return false;
    for (property in firstObj) {
        if (!secondObj.hasOwnProperty(property)) return false;
        if (typeof(firstObj[property]) == 'number' && firstObj[property] != secondObj[property]) return false;
        if (typeof(firstObj[property]) == 'object' && !isEqual3(firstObj[property], secondObj[property])) return false;
    }
    return true
}

const data6 = { a: 1, b: 1, c: {
    a: 2,
    b: 2,
} };
const data7 = { a: 1, b: 1, c: {
    a: 2,
    b: 2,
} };

console.log(isEqual3(data6, data7));

