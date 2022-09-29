// Вывести на страницу в одну строку через запятую числа от 10 до 20 и наоборот.

for (let i=10; i<=20; i++) {
    document.write(i+",");
}

for (let j=20; j>=10; j--) {
    if (j == 10) {
        document.write(j);
    } else {
        document.write(j+",");
    }        

} 