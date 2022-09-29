// Напишите функцию isUpperCase(str, character), которая определяет в каком регистре написан символ строки в указанной позиции. Если в верхнем регистре выводится – true, если в нижнем – false.

const isUpperCase = (str, character) => str[character] === str[character].toUpperCase();

let str = 'tasks JavaScript';
let character = 6;

console.log(isUpperCase(str,character));