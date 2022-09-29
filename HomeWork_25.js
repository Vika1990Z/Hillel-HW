// Напишите все возможные варианты для подмены контекста чтобы вызов метода getFullName вывел нужный результат.

const quest = {
    firstName: "John",
    lastName: "Konor",
    getFullName: function () {
      return this.firstName + ' ' + this.lastName;
    },
}
  
const admin = {
    firstName:"Bob",
    lastName: "Morley",
}
  
console.log(quest.getFullName()); // John Konor

console.log(quest.getFullName.bind(admin)());  // Bob Morley
console.log(quest.getFullName.call(admin)); // Bob Morley
console.log(quest.getFullName.apply(admin)); // Bob Morley