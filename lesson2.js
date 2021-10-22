'use strict'

// Task 4
//
// function toMakeArray(a) {
//     function recurse() {
//         for (a; a <= 15; a++) {
//             console.log(a)
//         }
//     }
//     switch (a) {
//         case 1: {
//             recurse();
//             break;
//         }
//         case 2: {
//             recurse()
//             break;
//         }
//         case 3: {
//             recurse()
//             break;
//         }
//         case 4: {
//             recurse()
//             break;
//         }
//         case 5: {
//             recurse()
//             break;
//         }
//         case 6: {
//             recurse()
//             break;
//         }
//         case 7: {
//             recurse()
//             break;
//         }
//         case 8: {
//             recurse()
//             break;
//         }
//         case 9: {
//             recurse()
//             break;
//         }
//         case 10: {
//             recurse()
//             break;
//         }
//         case 11: {
//             recurse()
//             break;
//         }
//         case 12: {
//             recurse()
//             break;
//         }
//         case 13: {
//             recurse()
//             break;
//         }
//         case 14: {
//             recurse()
//             break;
//         }
//         case 15: {
//             recurse()
//             break;
//         }
//         default: {
//             console.log('ERROR');
//             break;
//         }
//     }
// }
// let num = +prompt("Type number from 1 to 15: ")
// toMakeArray(num)

// Task 5-6
//
// function sum(num1, num2) {
//     return num1 + num2;
// }
//
// function subtract(num1, num2) {
//     return num1 - num2;
// }
//
// function mult(num1, num2) {
//     return num1 * num2;
// }
//
// function division(num1, num2) {
//     return num1 / num2;
// }
//
// function mathOperation(arg1, arg2, operation) {
//     switch (operation) {
//         case 'sum':
//             console.log(sum(arg1, arg2))
//             break;
//         case 'subtraction': {
//             console.log(subtract(arg1, arg2))
//             break;
//         }
//         case 'mult': {
//             console.log(mult(arg1, arg2))
//             break;
//         }
//         case 'division': {
//             console.log(division(arg1, arg2))
//             break;
//         }
//         default: {
//             console.log('ERROR')
//         }
//     }
// }
//
// mathOperation(1, 2, 'sum')
// mathOperation(1, 2, 'subtraction')
// mathOperation(1, 2, 'mult')
// mathOperation(1, 2, 'division')
// mathOperation(1, 2, 'diision')

// Task 7
//
// function power(val, pow) {
//     return (pow === 1) ? val : (val * power(val, pow - 1));
// }
//
// console.log(power(2, 3))

// Task 8

function game(choice) {
  // Выбирает рандомное число в хаданном диапазоне
  function robot(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // Присваеваем полученное число переменной, для дальнейшей игры
  let b = robot(1, 3)
  // console.log(b)

  function robotWin() { // Чтобы не писать повторяющийся код, создаем функции, которые объявляют победителей
    return console.log('Robot win!')
  }
  function youWin() {
    return console.log('You win!')
  }

  if (b === choice) { // Если сравниваемые значения совпадают, то говорим что "Ничья"
   return console.log('Dead heat')
  } else { // иначе выбираем победителя
    switch (choice) {
      case 1: {
        if (b === 2) {
          return console.log(youWin())
        } else {
          return console.log(robotWin())
        }
      }
      case 2: {
        if (b === 1) {
          return console.log(robotWin())
        } else {
          return console.log(youWin())
        }
      }
      case 3: {
        if (b === 1) {
          return console.log(youWin())
        } else {
          return console.log(robotWin())
        }
      }
      default: { // Если число не подходит в заданный диапазон, то говорим об ошибке и начинаем игру заново
        console.log('Введите число от 1 до 3');
        question();
        break;
      }
    }
  }
}

// Запраштвает число от одного до трех, чтобы начать игру
function question() {
  let answer = +prompt('Введите число: 1-камень, 2-ножницы, 3-бумага')
  // console.log(answer);
  // Завершает игру если нажать отмену или ничего не ввести
  if ( answer === 0) {
    return console.log('You cancel the game!')
  } else if (isNaN(answer) ){ // Обрабатывает ошибку NaN и запрашивает занново ввод чисел
    console.log('Введите число')
    question();
  } else { // начинает игру
    game(answer);
  }
}
question()