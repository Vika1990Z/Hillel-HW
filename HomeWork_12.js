// Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.

const comparison = (str1, str2) => str1.toLowerCase() === str2.toLowerCase();


let str1 = prompt('enter str1');
console.log (`INFO: str1 = "${str1}"`);

let str2 = prompt('enter str2');
console.log (`INFO: str2 = "${str2}"`);

console.log(`RESULT: ${comparison(str1, str2)}`);
