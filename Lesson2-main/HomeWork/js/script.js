// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

let value = 0;

if (value > 0) {
    console.log(true)
}
else {
    console.log(false)
}
;


// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

let second = true;
if (second === "test") {
    console.log(true)
}
else {
    console.log(false)
};
// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// let third=null;
const result = 9;
// switch (result) {
//     case result > 10:
//         third = result - 5;
//         break;
//     case result < 10:
//         third = result + 5;
// };
// console.log(third);
       
if (result > 10) {
    console.log(result + 5); 
}
if (result < 10) {
    console.log(result - 5);
}
//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const months = prompt("Введіть порядковий номер місяця");
// let answer;
// switch (months) {
// case "1":
// answer = "January";
// break;
// case "2":
// answer = "February";
// break;
// case "3":
// answer = "March";
// break;
// case "4":
// answer = "April";
// break;
// case "5":
// answer = "May";
// break;
// case "6":
// answer = "June";
// break;
// case "7":
// answer = "July";
// break;
// case "8":
// answer = "August";
// break;
// case "9":
// answer = "September";
// break;
// case "10":
// answer = "October";
// break;
// case "11":
// answer = "November";
// break;
// case "12":
// answer = "December";
// break;
// default:
// answer = "Invalid input";
// }
// alert(answer);
//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел
let number = prompt("Please, enter a three-digit number");
let sum=0;
while (number > 0) {
const digit = number % 10;
sum += digit;
number = Math.floor(number / 10);
}

console.log(sum); 
