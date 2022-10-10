# ДЗ 38. httpGet. use XMLHttpRequest with promise

Створити функцію httpGet.  
Всередині функції потрібно використовувати XMLHttpRequest для надсилання та
отримання даних.  
Реалізувати логіку з допомогою промісів.

* також додати можливість передавати у функцію method, body - щоб була можливість використовувати не лише GET, а також інші методи POST, PUT, DELETE.

Приклад як слід викликати функцію з GET.

```js
httpGet("https://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    console.log(`Resolve: ${response}`)
  })
  .catch(function (error) {
    console.log(`Reject: ${error}`)
  });
```  