let numberN;
let numberM;

do{
    numberN = +prompt(" Введіть значення N" , 1)
} while(!Number (numberN > 0))

alert(`Чи є число цілим? = ${Number.isInteger(numberN)}`);
console.log(numberN);

do{
    numberM = +prompt("Введіть значення M" , 3)
} while (!Number(numberM > numberN))

alert (`Чи є число цілим ? = ${Number.isInteger(numberM)}`);
console.log(numberM);

let evenNumbers = confirm("Використовувати парні числа?");
console.log(evenNumbers);

let sum = 0;


if(!evenNumbers){
    for(  i = numberN; i < numberM; i++) {
        if (i % 2 !== 0){
            sum +=i;
        }   
       console.log(i);
    }
} else {
    for(  i = numberN; i < numberM; i++) {
        if(i % 2 !== 0) {
            sum +=i;
        }
    console.log(i);
    }
}
alert(`Сума чисел = ${sum} `);