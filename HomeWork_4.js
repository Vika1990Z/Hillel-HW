//___________________task form HILLEL________________________
// Вводятся три разных числа. Найти, какое из них является средним (больше одного, но меньше другого).

// let input1 = prompt('введите значение input1');
// while (input1==="" || input1===null) {
//     input1 = prompt('введите значение input1');
// }

// let input2 = prompt('введите значение input2');
// while (input2==="" || input2===null) {
//     input2 = prompt('введите значение input2');
// }

// let input3 = prompt('введите значение input3');
// while (input3==="" || input3===null) {
//     input3 = prompt('введите значение input3');
// } 

// let average = null;

// if ((Number(input1)>Number(input2) && Number(input1)<Number(input3)) || (Number(input1)<Number(input2) && Number(input1)>Number(input3))) {
//     average = input1;
// } else if ((Number(input2)>Number(input1) && Number(input2)<Number(input3)) || (Number(input2)<Number(input1) && Number(input2)>Number(input3))) {
//     average = input2;
// } else {
//     average = input3;
// }

// console.log(`Среднее число это ${average}`); // вывод в консоль
// alert(`Среднее число это ${average}`); // вывод в браузер 





//___________________updated task________________________
// знайти число найближче до середнього арифметичного не серед 3, а будь-якої
// кількості чисел, 
// якщо таких чисел більш ніж одне, вивести перше знайдене
function averageNumber (...numbers) {
    console.log('numbers', numbers);

    // find the arithmetic mean:
    let sum = numbers.reduce((acc, number) => acc + number, 0);
    let average = Math.round(sum/numbers.length);
    console.log('average', average);

    // collect an array from the rest
    let rest = numbers.map(number => Math.abs(average - number));
    minRest = Math.min(...rest);

    // find the array element closest to the arithmetic mean
    for (let i = 0; i < numbers.length; i++) {
        if (rest[i] === minRest) {
            console.log('closest to the mean', numbers[i]);
            return numbers[i];
        }
    }

}

let a = averageNumber (1,0,9,3,8);
