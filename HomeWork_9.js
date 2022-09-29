// Вводится строка произвольного содержания (буквы, числа, символы). Найти все числа в строке. Результат число. Например, если дана строка 23Gjf4uf21, результат 23421

let myStr = prompt ('Please, enter some sequence of characters');
while (myStr === null || myStr === ''){
    myStr = prompt('Please, enter some sequence of characters');
}
console.log(`INFO: entered string: "${myStr}"`);

let resultStr = "";
for (let i = 0; i<myStr.length; i++) {
    if (!isNaN(Number(myStr[i])) && myStr[i]!=" " ) {
        resultStr += myStr[i];
    }
}

console.log(`RESUlT: "${resultStr}"`);