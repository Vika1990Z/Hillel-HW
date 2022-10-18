# ДЗ 42. Function delay. Promise.

Реалізувати ф-цію delay.

По логікі, потрібно викликати колбек через затримку яку ми прокинули, 
Якщо затримка більше нуля, то маємо потрапити в resolve. 
Якщо затримка 0, то потрппляємо в reject.

Потрібно використати promise.

Приклад коду:

```js
const delay = () => {
  console.log('Write your logic here!');
}

delay(3000)
  .then(() => console.log('Fire after 3 sec'))
  .catch(() => console.log('Error!'));
```