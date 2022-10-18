# ДЗ 40. Function renderUser. Destructuring assignment.

Реалізувати ф-цію renderUser.

По логікі, необхідно відмалювати в DOM всі данні з userData.

Необхідно використати destructuring assignment для доступу до кожного зі значень.

Приклад коду:

```js
const userData = {
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
};

const renderUser = () => {
  console.log('Write your logic here!')
}

renderUser(userData);
```