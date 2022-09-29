// Вводятся три разных числа. Найти, какое из них является средним (больше одного, но меньше другого).

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

let average = null;

if ((Number(input1)>Number(input2) && Number(input1)<Number(input3)) || (Number(input1)<Number(input2) && Number(input1)>Number(input3))) {
    average = input1;
} else if ((Number(input2)>Number(input1) && Number(input2)<Number(input3)) || (Number(input2)<Number(input1) && Number(input2)>Number(input3))) {
    average = input2;
} else {
    average = input3;
}

console.log(`Среднее число это ${average}`); // вывод в консоль
alert(`Среднее число это ${average}`); // вывод в браузер 

