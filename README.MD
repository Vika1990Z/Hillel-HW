# ДЗ 24. getAccess. 

Реализовать метод так, чтобы для для каждого объекта выводились корректные данные.

```js
function getAccess() {
  console.log('Напишите здесь свое решение');
}

const guest = {
  firstName: "John",
  lastName: "Konor",
  access: false,
}

const admin = {
  firstName:"Bob",
  lastName: "Morley",
  access: true,
}

console.log(guest.getAccess());// "Sorry, you don't have access, John Konor"
console.log(admin.getAccess());// "Access granted, welcome Bob Morley"
```