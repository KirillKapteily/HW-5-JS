//1
const drinks = prompt("Введіть напій");

switch (drinks) {
  case "Кава":
    alert(drinks);
    break;
  case "Чай":
    alert(drinks);
    break;
  case "Сік":
    alert(drinks);
    break;

  default:
    alert("Something went wrong!");
}

//2
const weeks = prompt("Введіть день тижня");

switch (weeks) {
  case "Понеділок":
    alert(`${weeks} це робоій день`);
    break;
  case "Вівторок":
    alert(`${weeks} це робоій день`);
    break;
  case "Середа":
    alert(`${weeks} це робоій день`);
    break;
  case "Четвер":
    alert(`${weeks} це робоій день`);
    break;
  case "П'ятниця":
    alert(`${weeks} це робоій день`);
    break;

  case "Субота":
    alert(`${weeks} це вихідний день`);
    break;
  case "Неділя":
    alert(`${weeks} це вихідний день`);
    break;

  default:
    alert("error");
}

//3
const monthNumber = parseInt(prompt("Введіть номер місяця"));

switch (monthNumber) {
  case 12:
    alert("Зима! Грудень!");
    break;

  case 1:
    alert("Зима! Січень!");
    break;

  case 2:
    alert("Зима! Лютий!");
    break;

  case 3:
    alert("Весна! Березень!");
    break;

  case 4:
    alert("Весна! Квітень!");
    break;

  case 5:
    alert("Весна! Травень!");
    break;

  case 6:
    alert("Літо! Червень!");
    break;

  case 7:
    alert("Літо! Липень!");
    break;

  case 8:
    alert("Літо! Серпень!");
    break;

  case 9:
    alert("Осінь! Вересень!");
    break;

  case 10:
    alert("Осінь! Жовтень!");
    break;

  case 11:
    alert("Осінь! Листопад!");
    break;

  default:
    alert("Something went wrong");
}

//4
const light = prompt("Введіть колір світлофору");

switch (light) {
  case "Червоний":
    alert("Стоп!");
    break;

  case "Жовтий":
    alert("чекати!");
    break;

  case "Зелений":
    alert("йти!");
    break;

  default:
    alert("error");
}

//5
let numberOne = parseFloat(prompt("Введіть число"));
let operator = prompt("введіть оператор (+, -, /, *)");
let numberTwo = parseFloat(prompt("Введіть число"));

let result;

switch (operator) {
  case "+":
    alert(numberOne + numberTwo);
    break;

  case "-":
    alert(numberOne - numberTwo);
    break;

  case "/":
    if (numberTwo !== 0) {
      alert(numberOne / numberTwo);
    } else {
      alert("Ділення на 0 неможливе!!");
    }

    break;

  case "*":
    alert(numberOne * numberTwo);
    break;

  default:
    alert("error");
    console.log("err");
    console.log(numberOne + operator + numberTwo);
}
