# ДЗ 39. Function sumAllNumbers. Rest parameters.

Реалізувати ф-цію sumAllNumbers.

По логікі, ця ф-ція сумує всі числа. 
Якщо все добре, то виводимо результат, якщо ні, то помилку.

Потрібно використати rest parameters.



Приклад коду:

```js
const sumAllNumbers = () => {
  console.log('Write your logic here!')
}

console.log(sumAllNumbers(1)) // 1
console.log(sumAllNumbers(1, 2, 3)) // 6
console.log(sumAllNumbers(1, 2, 3, 1, 2, 1, 10)) // 20
console.log(sumAllNumbers(1, '2', 3)) // Error! You can use only numbers.
console.log(sumAllNumbers([1, 2])) // Error! You can use only numbers.
console.log(sumAllNumbers({ number: 1 })) // Error! You can use only numbers.
```