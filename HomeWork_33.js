// Потрібно створити клас Animal та успадкувати від нього Cat, Dog.

// Умови:

// Animal повинен приймати name і має метод sayName - який виводить "My name is {name}".
// Cat повинен мати метод sayHello - який виводить "Hello from {name}, I am a cat".
// Dog повинен мати метод sayHello - який виводить "Hello from {name}, I am a dog".
// Cat, Dog повинні мати ті самі властивості і методи що і Animal.


// Реалізувати можна будь-яким способом, функції конструктори чи класи.

class Animal {
    constructor(name) {
        this.name = name;
    }
    sayName() {console.log(`My name is ${this.name}`)}
}

class Cat extends Animal {
    sayHello() {console.log(`Hello from ${this.name}, I am a cat`)}
}

class Dog extends Animal {
    sayHello() {console.log(`Hello from ${this.name}, I am a dog`)}
}

const fluffy = new Dog('Fluffy');
fluffy.sayHello();
fluffy.sayName();

const milly = new Cat('Milly');
milly.sayHello();
milly.sayName();