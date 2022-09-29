// Вводятся три целых числа. Определить какое из них наибольшее.

let input1 = prompt('введите значение input1');
while (input1==="" || input1===null) {
    input1 = prompt('введите значение input1');
}

let input2 = prompt('введите значение input2');
while (input2==="" || input2===null) {
    input2 = prompt('введите значение input2');
}


let input3 = prompt('введите значение input3');
while (input3==="" || input3===null) {
    input3 = prompt('введите значение input3');
} 


let largest = null;


if (Number(input1)>Number(input2) && Number(input1)>Number(input3)) {
    largest = input1;
} else if (Number(input2)>Number(input1) && Number(input2)>Number(input3)){
    largest = input2;
} else {
    largest = input3;
}

console.log(`Наибольшее число это ${largest}`); // вывод в консоль
alert(`Наибольшее число это ${largest}`); // вывод в браузер 
