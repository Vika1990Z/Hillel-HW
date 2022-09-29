// Написать функцию, которая вычисляет значение а^b

function exponentiation (base, degree) {
    let result = 1;
    if (degree < 0) {
        console.log("INFO: we will use as a degree: ", Math.abs(degree));
    }
    if (isNaN(base) || isNaN(degree)) {
        result = NaN;
    } else if (base === 0) {
        result = 0;
    } else {
        for (let i = 1; i <= Math.abs(degree); i++) {
            result *= base;
        } 
    }
    return result;
}




let myBase = prompt ("enter base value that, you want to raise");
let myDegree = prompt ("enter the degree");


console.log ("INFO: base is: ", myBase);
console.log ("INFO: degree is: ", myDegree);
console.log("RESULT: ", exponentiation (myBase, myDegree));


// function exponentiation (base, degree) {
//     return Math.pow(base, degree);
// }