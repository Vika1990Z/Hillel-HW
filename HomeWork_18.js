//___________________task form HILLEL________________________
// Палиндромом называют слово или фразу, которая читается в обе стороны
// одинаково. 
//В этом задании нужно написать функцию, которая проверяет, является ли исходная строка палиндромом.
// function removeSpaces(str){
//     let resulrStr = '';
//     for (let i=0; i<str.length; i++) {
//         if (str[i] !== " ") resulrStr += str[i];    
//     }
//     return resulrStr;
//   }

// function palindrome(str) {
//     let initialStr = removeSpaces(str);
//     let initialArr = initialStr.split('');
//     let reverseArr = initialArr.slice().reverse();
//     let reverseStr = reverseArr.join('');
//     return initialStr.toLowerCase() === reverseStr.toLowerCase();
//   }

// console.log(palindrome('racecar')); // true
// console.log(palindrome('table')); // false
// console.log(palindrome('Анна')); // true
// console.log(palindrome('А роза упала на лапу Азора')); // true





//___________________updated task________________________
// переписати використовуючи тільки цикл for з декількома умовами


const palindrome = str => {
  for (let i=0, j=str.length-1; i<str.length, j>=0; i++, j--) {
    if (str[i].toLowerCase() === str[j].toLowerCase()) return true;
    else return false;
  }
}

console.log(palindrome('racecar')); // true
console.log(palindrome('table')); // false
console.log(palindrome('Анна')); // true
console.log(palindrome('А роза упала на лапу Азора')); // true