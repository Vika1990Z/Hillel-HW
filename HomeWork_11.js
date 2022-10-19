//___________________task form HILLEL________________________
// Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов

// function removeChar (str) {
//     let resultStr = ''
//     for (let i = 0; i < str.length; i++) {
//         if (str[i].toUpperCase() != str[i].toLowerCase()) resultStr += str[i];    
//     }
//     return resultStr;
// }

// let str = prompt("enter some string");
// console.log(`INFO: entered string "${str}"`);
// console.log(`RESULT: ${removeChar(str)}`);



//___________________ fixed ________________________
const removeChar = str => {
    let resultStr = ''
        for (let i = 0; i < str.length; i++) {
            if (str[i].toUpperCase() != str[i].toLowerCase() || !Number.isNaN(+str[i]) && str[i] !=" ") resultStr += str[i];    
        }
    console.log(resultStr)    
    return resultStr;
}

removeChar('qjwef b4385 **');



// or
const removeChar2 = str => {
    return str.split('').reduce((acc, curr) => {
        if (curr.toLowerCase() != curr.toUpperCase() || !Number.isNaN(+curr) && curr != ' ') acc += curr;
        return acc;
    }, "");
}
console.log(removeChar2('askndf4**.  *398'));



// or with RegExp
const removeChar3 = str => str.replace(/\W/g,'');

console.log(removeChar3('askndf4**.  *398'));