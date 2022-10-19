//___________________task form HILLEL________________________
// Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она
// длиннее указанного количества символов n. 
// Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.

// function limitStr(str, n, symb="...") {
//     let resultStr = "";
//     if (str.length > n) resultStr = str.substring(0,n)+symb;
//     else resultStr=str;
//     console.log(`RESULT: ${resultStr}`);
//     return resultStr;
// }

// // tests from task's condition:
// limitStr('Каждый охотник желает знать.'); // RESULT: Каждый охотник желает знать.
// limitStr('Каждый охотник желает знать.', 14); // RESULT: Каждый охотник...
// limitStr('Каждый охотник желает знать.', 21, '!'); // RESULT: Каждый охотник желает!

// // own test 
// limitStr('Каждый охотник желает знать.', 50, '!'); //  RESULT: Каждый охотник желает знать. 
// limitStr('Каждый охотник желает знать.', 0, '!'); //  !
// limitStr('Каждый охотник желает знать.', 22, "!"); // K!




//___________________updated task________________________
// переписати невикористовуючи змінних та ключового слова if (також спробуй застосувати template strings)

const limitStr = (str, n, symb = '...') => `${str.substring(0,n)}${symb}`;


console.log(limitStr('Каждый охотник желает знать.', 50, )); //  RESULT: Каждый охотник желает знать. 
console.log(limitStr('Каждый охотник желает знать.', 0, '!')); //  !
console.log(limitStr('Каждый охотник желает знать.', 21, "!")); // K!