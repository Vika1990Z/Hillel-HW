

const isEqual = function(firstObject, secondObject){
    if (Object.keys(firstObject).length !== Object.keys(secondObject).length) return false;
    else {
        for (let i=0; i<Object.keys(firstObject).length; i++) {
            if (Object.keys(firstObject)[i] !== Object.keys(secondObject)[i] || Object.values(firstObject)[i] !== Object.values(secondObject)[i]) return false;
        }
    }
    return true;

} 

  
const data = { a: 1, b: 1 };
const data2 = { a: 1, b: 1 };
const data3 = { a: 1, b: 2 };
const data4 = { a: 1, c: 1 };
const data5 = { a: 1, b: 1, c: 1 };
console.log(isEqual(data, data2)); // true
console.log(isEqual(data, data3)); // false
console.log(isEqual(data, data4)); // false
console.log(isEqual(data, data5)); // false
