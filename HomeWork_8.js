//___________________task form HILLEL________________________
// Найти в строке указанную подстроку и заменить ее на новую. 
// Строку, ее подстроку для замены и новую подстроку вводит пользователь. 
// indexOf, substring, substr

// let str = prompt('Please, enter initial string');
// while (str === null || str === ''){
//     str = prompt('Please, enter initial string');
// }
// console.log(`INFO: initial string: "${str}"`);


// let subStr = prompt('Please, enter substring, that you want to change');
// while (subStr === null || subStr === '' || str.indexOf(subStr,0) < 0){
//     if (str.indexOf(subStr,0) < 0){
//         console.log (`ERR: entered subString: "${subStr}" not a part of initial string: "${str}"`);
//         subStr = prompt('Please, enter substring, that you want to change');
//     }
//     subStr = prompt('Please, enter substring, that you want to change');   
// }
// console.log(`INFO: entered subString: "${subStr}"`);


// let newSubStr = prompt('Please, enter new substring');
// while (newSubStr === null || newSubStr === ''){
//     newSubStr = prompt('Please, enter new substring');
// }
// console.log(`INFO: entered new subString: "${newSubStr}"`);


// let resultStr = str.replace(subStr, newSubStr);
// console.log(`RESUlT: "${resultStr}"`)





//___________________updated task________________________
// замінити не лише перше знайдене входження підрядку у рядку, а усі що є. 

function replaceStr (str, subStr, newSubStr) {
    return str.replaceAll(subStr, newSubStr);
}

let str = `Betty Botter bought some butter
But, said she, the butter's bitter.
If I put it in my batter,
it will make my batter bitter.
But a bit of better butter
will make my bitter batter better.
So she bought some better butter,
better than the bitter butter,
put it in her bitter batter,
made her bitter batter better.
So it was better
Betty Botter bought some better butte
`;

let subStr = 'tter';

let newSubStr = 'hello';

console.log(replaceStr (str, subStr, newSubStr));