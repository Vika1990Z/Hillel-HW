# ДЗ 41. Function myObjectAssign. Spread syntax.

Реалізувати ф-цію myObjectAssign.

По логікі, ця ф-ція має мержити всі обьекти в новий. 
По суті повинна працювати як Object.assign().

Необхідно використати spread syntax.


Приклад коду:

```js
const myObjectAssign = () => {
  console.log('Write your logic here!');
}

console.log(myObjectAssign({ a: 1 })); // { a: 1 }
console.log(myObjectAssign({ a: 1 }, { b: 2 })); // { a: 1, b: 2 }
console.log(myObjectAssign({ a: 1, b: 2 }, { b: 3 }, { a: 4, c: 5 })); // { a: 4, b: 3, c: 5 }
```