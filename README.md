# ДЗ 49. Users app. Create posts.

**Короткий опис**

Створити проект на основі ДЗ 48. Users app, в якому потрібно додати сторінку, де буде доступна можливість створювати пости користувачів, використовуючи форму.

**Детальний опис**

* Необхідно реалізувати один роут.  
* По шляху "/posts" - відобразити сторінку додавання постів. На цій сторінці має бути форма. Для створення форми необхідно використовувати [Formik](https://formik.org/). За цим [ендпоінтом](https://jsonplaceholder.typicode.com/posts) потрібно надсилати дані, використовуючи метод POST. [Тут](https://jsonplaceholder.typicode.com/guide/) можна знайти приклад запиту. 
* По полях для форми. Має бути input для title, textarea для body і select для userId (тут просто захардкодити id від 1 до 10). У кожного поля має бути валідація на required, якщо є бажання можна додати більше. У самому низу форми має бути кнопка для створення посту - input type submit. 
* Під формою має бути список постів. Спочатку він порожній, а значить потрібно вивести empty state (щось з текстом, що постів поки немає). Для цього потрібно створити state, який по дефолту буде порожнім масивом, а коли ви відправляєте форму, вам приходить відповідь з даними, які вам потрібно взяти і покласти в масив, щоб потім була можливість відмалювати пости в розмітці. 
