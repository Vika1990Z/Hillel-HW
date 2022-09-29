# ДЗ 12. Сравнение строк без учёта регистра

Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.

```js
function compareString(str1, str2) {
    ...ваш код...
};

console.log(compareString('string', 'StRiNg')); // true 
console.log(compareString('ABCDe', 'AbcdW'));   // false
```