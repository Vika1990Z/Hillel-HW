//___________________task form HILLEL________________________
// Unique. Напишите функцию, которая убирает повторяющиеся значения.

// const unique = (array) => {
//    let result = [];
//    array.forEach((element, _) => {
//       if (!result.includes(element)) result.push(element)
//    });
//    return result;
// }

// // or another option
// const unique2 = (array) => {
//    let result = array.filter((el, index) => {
//       let a = array.indexOf(el);
//       return a===index;
//    })
//    return result;
// }


// const data = [1, 2, 1, 2, 3, 0, 0, 0, NaN, NaN];
// console.log(data, 'INITIAL ARR'); // (10) [1, 2, 1, 2, 3, 0, 0, 0, NaN, NaN] 'INITIAL ARR'
// console.log(unique(data), 'RESULT'); // (5) [1, 2, 3, 0, NaN] 'RESULT'
// console.log(unique2(data), 'RESULT'); // (5) [1, 2, 3, 0, NaN] 'RESULT'



//___________________updated task________________________
// переписати використовуючи обʼект типу Set()

const unique = arr => {
   mySet = new Set;
   arr.forEach(element => mySet.add(element));
   return Array.from(mySet);
}

const data = [1, 2, 1, 2, 3, 0, 0, 0, NaN, NaN];
console.log(unique(data)); // (5) [1, 2, 3, 0, NaN] 
