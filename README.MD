# ДЗ 15. Compact. 

Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.

```js
const compact = (array) => {
 // Напишите здесь свое решение
}

const data = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(data)) // [1, 2, 3]
```