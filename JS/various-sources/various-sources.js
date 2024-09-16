

/* 




*/ 

/* 
Write a function which takes a string and crops it until its length is 5

*/ 


function crop(str) {
  return (str.length == 5) ? str : str.split('').unshift();
}

console.log(crop('Hello my dear friend'));

// function pow(x, n) {
//   return (n == 1) ? x : (x * pow(x, n - 1));
// }

// console.log(pow(2, 4));

/* Find the production of all the digits without using strings
const number = 2365;
const d1 = Math.floor(number / 1000);
const d2 = Math.floor(number % 1000 / 100);
const d3 = Math.floor(number % 100 / 10);
const d4 = Math.floor(number % 10);
console.log(d1 * d2 * d3 * d4);

*/ 





// function steamrollArray(arr) {
//   let flattenedArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!Array.isArray(arr[i])) {
//       flattenedArray.push(arr[i]);
//       continue;
//       }
//       for (let j = 0; j < arr[i].length; j++) {
//         flattenedArray.push(arr[i][j]);
//       }
//     } 
//   return flattenedArray;
// }

// console.log(steamrollArray([1, [2], [3, [[4]]]]));
// console.log(steamrollArray([1, [2], [3, [[4]]]]));
// console.log(steamrollArray([1, [], [3, [[4]]]]));
// console.log(steamrollArray([1, {}, [3, [[4]]]]));


// function 

/*
let arr = [5, 3, 8, 1, 2, 6];

function filterRangeInPlace(arr, a, b) {
  arr.forEach((element, index) =>  {
    if (!element >= a || !element <= b) {
      arr.splice(index, 1);
    }
  })
  return arr;
}

// console.log(filterRangeInPlace(arr, 1, 4));
console.log(filterRangeInPlace(arr, 2, 3));
*/

// function Contact(name, number) {
//   this.name = name;
//   this.number = number;
// }

// Contact.prototype.print = function() {
//   return this.name + ": " + this.number;
// }

// const a = new Contact("David", 12345);
// const b = new Contact("Amy", 136643214);

// console.log(a.print());
// console.log(b.print());

/* 




*/ 

/* Тинькофф экзамен

Четыре человека выстроились в очередь друг за другом. Определите, правда ли, что они стоят по росту (неважно, в порядке неубывания или порядке невозрастания). 
 
Формат входных данных 
 
Единственная строка содержит числа h1, h2, h3, h4 (0 <= hi <= 300), где hi — рост человека, стоящего на i-й позиции. 
 
Формат выходных данных 
 
Выведите YES, если люди выстроены в порядке неубывания или невозрастания их роста, и NO в противном случае.


Порядок неубывания или невозрастания - это свойство последовательности, при котором ее элементы расположены в порядке возрастания или равенства (в случае неубывания) или в порядке убывания или равенства (в случае невозрастания). Другими словами, если последовательность a1, a2, a3, ..., an имеет порядок неубывания, то a1 ≤ a2 ≤ a3 ≤ ... ≤ an, а если она имеет порядок невозрастания, то a1 ≥ a2 ≥ a3 ≥ ... ≥ an. Это понятие широко используется в математике, особенно в теории чисел, анализе и дискретной математике.


function heightCheck (str) {

  const arr = str.split('');
   
  for (let i = 1; i < arr.length; i++) {

    if (arr[i] >= arr[i-1] && arr[i] <= arr[i+1]) {
      return 'YES';
    } else if (arr[i] <= arr[i-1] && arr[i] >= arr[i+1]) {
      return 'YES';
    } 
    
    else {
      return 'NO';
    }

  }

}

console.log(heightCheck('1234'));
console.log(heightCheck('7655'));
console.log(heightCheck('4444'));
console.log(heightCheck('5231'));

*/ 


/* map() https://www.youtube.com/watch?v=cTNR5eN-uEY


const values = [2, 14, 20, 50]

const newValues = values.map((value, index) => {
  let newValue = value +2;
  console.log('new value: ' + newValue + ' , index number: ' + (index +1))
})

console.log(newValues)

/*

*/

// const statusArr = [
//   {status: "INSUFFICIENT_FUNDS", change: []},
//   // return if cash-in-drawer is less than the change due, or if you cannot return the exact change
//   {status: "CLOSED", change: []},
//   // return with cash-in-drawer as the value for the key change if it is equal to the change due
//   {status: "OPEN", change: []}
//   // return with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
// ]

// const currencyArr = [
//   ['PENNY', 0.01],
//   ['NICKEL', 0.05],
//   ['QUARTER', 0.25],
//   ['DIME', 0.1],
//   ['DOLLAR', 1],
//   ['FIVE', 5],
//   ['TEN', 10],
//   ['TWENTY', 20],
//   ['ONE HUNDRED', 100]
// ]

// function checkCashRegister(price, cash, cid) {
//   let change = cash*100 - price*100;
//   let cidTotal = 0;
//   for (let elem of cid) {
//     cidTotal += elem[1]*100;
//   } if (change > cidTotal) {
//     return {status: "INSUFFICIENT_FUNDS", change: []}
//   } else if (change === cidTotal) {
//     return {status: "CLOSED", change: cid}
//   } else {
//     let answer = [];
//     cid = cid.reverse();
//     let moneyUnits = {
//       'ONE HUNDRED': 10000,
//       'TWENTY': 2000,
//       'TEN': 1000,
//       'FIVE': 500,
//       'ONE': 100,
//       'QUARTER': 25,
//       'DIME': 10,
//       'NICKEL': 5,
//       'PENNY': 1
//     }
//     for (let elem of cid) {
//       let accumulator = [elem[0], 0];
//       elem[1]=elem[1]*100;
//       while (change >= moneyUnits[elem[0]] && elem[1] > 0) {
//         change -= moneyUnits[elem[0]];
//         elem[1] -= moneyUnits[elem[0]];
//         accumulator[1] += moneyUnits[elem[0]]/100;
//       }
//       if (accumulator[1] > 0) {
//         answer.push(accumulator);
//       }
//     }
//     if (change > 0) {
//       return {status: "INSUFFICIENT_FUNDS", change: []}
//     }
//     return {status: "OPEN", change: answer};
//   }
// }

// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

// function checkCashRegister(price, cash, cid) {
//   let change = cash - price;
//   let cidTotal = 0;
//   for (let elem of cid) {
//     cidTotal += elem[1];
//   } if (change > cidTotal) {
//     return {status: "INSUFFICIENT_FUNDS", change: []}
//   } else if (change === cidTotal) {
//     return {status: "CLOSED", change: cid}
//   } else {
//     let answer = [];
//     cid = cid.reverse();
//     let moneyUnits = {
//       'ONE HUNDRED': 100,
//       'TWENTY': 20,
//       'TEN': 10,
//       'FIVE': 5,
//       'ONE': 1,
//       'QUARTER': 0.25,
//       'DIME': 0.1,
//       'NICKEL': 0.05,
//       'PENNY': 0.01
//     }
//     for (let elem of cid) {
//       let accumulator = [elem[0], 0];
//       elem[1]=elem[1];
//       while (change >= moneyUnits[elem[0]] && elem[1] > 0) {
//         change -= moneyUnits[elem[0]];
//         elem[1] -= moneyUnits[elem[0]];
//         accumulator[1] += moneyUnits[elem[0]];
//       }
//       if (accumulator[1] > 0) {
//         answer.push(accumulator);
//       }
//     }
//     if (change > 0) {
//       return {status: "INSUFFICIENT_FUNDS", change: []}
//     }
//     return {status: "OPEN", change: answer};
//   }
// }

// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

/*


*/


/* https://learn.javascript.ru/array-methods#tasks

*/

/* https://learn.javascript.ru/array-methods#tasks

*/

/* Сортировать в порядке по убыванию https://learn.javascript.ru/array-methods#tasks


function sortedArr(arr) {
  return arr.sort((a, b) => b - a);
}
let arr1 = [15, -6, 2, 1, -10, 8, 15, -55];

console.log(sortedArr(arr1)); 

*/





/* Фильтрация по диапазону "на месте"

Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать.

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); 


function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    if (a > arr[i] || arr[i] > b) {
      arr.splice(i, 1);
    } 
  }
}

console.log(arr);



*/


/* Фильтрация по диапазону https://learn.javascript.ru/array-methods#tasks


важность: 4
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

Функция должна возвращать новый массив и не изменять исходный.

Например:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);


alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений)


function filterRange(arr, a, b) {
  return arr.filter(item => a <= item && item <= b);

};

let arr = [5,3,8,1];
let filtered = filterRange(arr, 1, 5);

console.log(arr)
console.log(filtered)

*/


/* Переведите текст вида border-left-width в borderLeftWidth https://learn.javascript.ru/array-methods#tasks



function camelize(str) {
  return str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
}

// забываю ставить скобки после методов

console.log(camelize('hello-my-friend'))

*/

