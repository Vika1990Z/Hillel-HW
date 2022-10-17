const sumAllNumbers = (...numbers) => {
    let result = 0;
    
    for (element of numbers) {
        if (!Number.isInteger(element)) return "Error! You can use only numbers.";
        result += element
    };
    return result;
}

console.log(sumAllNumbers(1)) // 1
console.log(sumAllNumbers(1, 2, 3)) // 6
console.log(sumAllNumbers(1, 2, 3, 1, 2, 1, 10)) // 20
console.log(sumAllNumbers(1, '2', 3)) // Error! You can use only numbers.
console.log(sumAllNumbers([1, 2])) // Error! You can use only numbers.
console.log(sumAllNumbers({ number: 1 })) // Error! You can use only numbers.

