// Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, null и т.п.

const isPlainObject = function (element) {
    let result=false;
    if (typeof(element)==='object') {
        if (!!element) {
            if (element.length === undefined) {
                result=true;
            }
        }
    }
    return result;
}
  
// потом подумала и написала так
const isPlainObject2 = element => typeof(element)==='object' && element!==null && !Array.isArray(element);


const data = { a: 1 };
const data2 = [1,2,3];
const data3 = null;
const data4 = 'hello'
console.log(isPlainObject(data)); // true
console.log(isPlainObject(data2)); // false
console.log(isPlainObject(data3)); // false
console.log(isPlainObject(data4)); // false


console.log(isPlainObject2(data)); // true
console.log(isPlainObject2(data2)); // false
console.log(isPlainObject2(data3)); // false
console.log(isPlainObject2(data4)); // false