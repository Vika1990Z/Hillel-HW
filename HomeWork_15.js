// Compact. Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.

let compact = (array) => {
    let resultArr = array.filter(element => element)
    return resultArr;
}

const data = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(data)) // [1, 2, 3]


let compact2 = (array) => {
    let resultArr = [];
    array.forEach(element => {if (element) resultArr.push(element);
    })
    return resultArr;
}

console.log(compact2(data)) // [1, 2, 3]
