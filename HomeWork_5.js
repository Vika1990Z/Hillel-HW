//___________________task form HILLEL________________________
// Вывести на страницу в одну строку через запятую числа от 10 до 20 и наоборот.

// for (let i=10; i<=20; i++) {
//     document.write(i+",");
// }

// for (let j=20; j>=10; j--) {
//     if (j == 10) {
//         document.write(j);
//     } else {
//         document.write(j+",");
//     }        
// } 



//___________________updated task________________________
// зробити використовуючи лише один цикл

let str = "";
for (let i = 10; i<=20; i++) {
    (i<20) ? str += i+"," : str += i;
}
console.log(`${str},${str.split(",").reverse().join(",")}`);


// спробувати переписати використовуючи тільки цикл for 
let str2 = "";
for (let i = 20; i>=10; i--) {
   str2 = `${i}${str2}${i}`
}
console.log(str2)