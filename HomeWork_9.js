//___________________task form HILLEL________________________
// Вводится строка произвольного содержания (буквы, числа, символы). Найти все
// числа в строке. Результат число. 
//Например, если дана строка 23Gjf4uf21, результат 23421

// let myStr = prompt ('Please, enter some sequence of characters');
// while (myStr === null || myStr === ''){
//     myStr = prompt('Please, enter some sequence of characters');
// }
// console.log(`INFO: entered string: "${myStr}"`);

// let resultStr = "";
// for (let i = 0; i<myStr.length; i++) {
//     if (!isNaN(Number(myStr[i])) && myStr[i]!=" " ) {
//         resultStr += myStr[i];
//     }
// }

// console.log(`RESUlT: "${resultStr}"`);




//___________________updated task________________________
// переписати невикористовуючи методи Number() isNaN() та перевірку на пробіл

const filterNumbers = str => str.replace(/\D/g,'');
console.log(filterNumbers('0ajfb  00 w. 42. 3))0,432/0'));


// or  переписати не використовуючи регулярку
const filterNumbers3 = str => {
    let result = "";
    for (let i = 0; i<str.length; i++) {
        if (!Object.is(Number.parseFloat(str[i]), NaN)) result += str[i];
    }
    return result;
}
console.log(filterNumbers3('0ajfb  00 w. 42. 3))0,432/0'));


// or functional approach :)
const filterNumbers4 = str => str.split('').filter(curr => !Object.is(Number.parseFloat(curr), NaN)).join('');
console.log(filterNumbers4('0ajfb  00 w. 42. 3))0,432/0'));




