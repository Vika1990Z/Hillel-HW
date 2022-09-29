// Палиндромом называют слово или фразу, которая читается в обе стороны одинаково. В этом задании нужно написать функцию, которая проверяет, является ли исходная строка палиндромом.
function removeSpaces(str){
    let resulrStr = '';
    for (let i=0; i<str.length; i++) {
        if (str[i] !== " ") resulrStr += str[i];    
    }
    return resulrStr;
  }

function palindrome(str) {
    let initialStr = removeSpaces(str);
    let initialArr = initialStr.split('');
    let reverseArr = initialArr.slice().reverse();
    let reverseStr = reverseArr.join('');
    return initialStr.toLowerCase() === reverseStr.toLowerCase();
  }
  



  console.log(palindrome('racecar')); // true
  console.log(palindrome('table')); // false
  console.log(palindrome('Анна')); // true
  console.log(palindrome('А роза упала на лапу Азора')); // true