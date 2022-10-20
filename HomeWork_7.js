//___________________task form HILLEL________________________
// Поменять в строке первые символы слов на верхний регистр 'a'.toUpperCase().

// let myString = prompt('Please, enter string');
// while (myString === null || myString === ''){
//     myString = prompt('Please, enter string');
// }

// let resultString = '';
// for (let i = 0; i < myString.length; i++) {
//     if (i === 0 || myString[i-1]===" ") {
//         resultString += myString[i].toUpperCase();
//     } else {
//         resultString += myString[i];
//     }    
// }

// console.log(resultString);




//___________________updated task________________________
// спробувати вирішити без використання циклу

const toUpper = str => str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
console.log(toUpper('ksldjferg slkjfd s kjgr kdjhbf jkrgb'));

// or with reduce and remove last white space with trim()
const toUpper2 = str => str.split(' ').reduce((acc, curr) => acc += `${curr[0].toUpperCase()}${curr.slice(1)} `, '').trimEnd();
console.log(toUpper2('ksldjferg slkjfd s kjgr kdjhbf jkrgb'));

// or remove last white space with slice
const toUpper3 = str => str.split(' ').reduce((acc, curr) => acc += `${curr[0].toUpperCase()}${curr.slice(1)} `, '').slice(0,-1);
console.log(toUpper3('ksldjferg slkjfd s kjgr kdjhbf jkrgb'));
