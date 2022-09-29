// Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов

function removeChar (str) {
    let resultStr = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i].toUpperCase() != str[i].toLowerCase()) resultStr += str[i];    
    }
    return resultStr;
}

let str = prompt("enter some string");
console.log(`INFO: entered string "${str}"`);
console.log(`RESULT: ${removeChar(str)}`);