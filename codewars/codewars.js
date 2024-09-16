/*

S1:


S2:


S3:


*/

/*

S1:


S2:


S3:


*/

/* Mean Square Error
https://www.codewars.com/kata/51edd51599a189fe7f000015/train/javascript
S1:


S2:


S3:


*/

// console.log(solution())

// console.log(solution())

// console.log(solution())

// console.log(solution())


/* Not very secure
https://www.codewars.com/kata/526dbd6c8c0eb53254000110/train/javascript

In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

The string has the following conditions to be alphanumeric:

At least one character ("" is not valid)
Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
No whitespaces / underscore

function alphanumeric(string) {
  const regex = /^[a-zA-Z0-9]+$/;
  return regex.test(string) ? true : false;
}

console.log(alphanumeric("Mazinkaiser"));
console.log(alphanumeric("hello world_"));
console.log(alphanumeric("PassW0rd"));
console.log(alphanumeric("     "));


S1:
let alphanumeric = s => /^[a-z\d]+$/i.test(s);


S2:
function alphanumeric(string){
  return /^[0-9a-z]+$/i.test(string);
}

S3:
const alphanumeric = str => /^[0-9a-z]+$/i.test(str)

*/



/*

Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.

A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...

Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:

your referral bonus, and

the price of a beer can

For example:

beeramid(1500, 2); // should === 12
beeramid(5000, 3); // should === 16

My 1st solutions:

var beeramid = function (bonus, price) {
  let beercans = bonus / price;
  let levels;
  if (beercans >= 1) {
    let remainder = beercans;

    for (let i = 1; remainder >= i * i; i++) {
      levels = i;
      remainder = remainder - i * i;
    }
  } else {
    levels = 0;
  }
  return levels;
};

console.log(beeramid(9, 2));
console.log(beeramid(10, 2));
console.log(beeramid(11, 2));
console.log(beeramid(21, 1.5));
console.log(beeramid(454, 5));
console.log(beeramid(455, 5));
console.log(beeramid(4, 4));
console.log(beeramid(3, 4));
console.log(beeramid(0, 4));
console.log(beeramid(-1, 4));

S1:

var beeramid = function(bonus, price) {
  var beers = Math.floor(bonus / price), levels = 0;
  while(beers >= ++levels * levels) {
    beers -= levels * levels;
  }
  return levels - 1;
}

S2:

const beeramid = (bonus, price, lvl = 1) =>
  bonus - lvl ** 2 * price < 0 ? --lvl : beeramid(bonus - lvl ** 2 * price, price, ++lvl);

S3:

var beeramid = function(bonus, price, level=1) {
  if (level**2*price > bonus)
    return level-1;
  return beeramid(bonus-level**2*price, price, level+1)
}

*/

// Test.assertEquals(beeramid(9, 2), 1);
// Test.assertEquals(beeramid(10, 2), 2);
// Test.assertEquals(beeramid(11, 2), 2);
// Test.assertEquals(beeramid(21, 1.5), 3);
// Test.assertEquals(beeramid(454, 5), 5);
// Test.assertEquals(beeramid(455, 5), 6);
// Test.assertEquals(beeramid(4, 4), 1);
// Test.assertEquals(beeramid(3, 4), 0);
// Test.assertEquals(beeramid(0, 4), 0);
// Test.assertEquals(beeramid(-1, 4), 0);

/* Count IP Addresses https://www.codewars.com/kata/526989a41034285187000de4/train/javascript


My solution based on a ChatGPT solution (in my original solution I started calculating the difference from the end, but starting from the beginning makes more sense; what's more, ChatGPT provided a nice way to convert the stringed number to numbers through mapping)

function ipsBetween(start, end) {
  let accumulator = 0;
  const firstIP = start.split(".").map(Number);
  const secondIP = end.split(".").map(Number);

  for (let i = 0; i < 4; i++) {
    accumulator = accumulator * 256 + (secondIP[i] - firstIP[i]);
    console.log(accumulator);
  }

  return accumulator;
}

console.log(ipsBetween("10.0.0.0", "10.0.0.50"));
console.log(ipsBetween("10.0.0.0", "10.0.1.0"));
console.log(ipsBetween("20.0.0.10", "20.0.1.0"));
console.log(ipsBetween("180.0.0.0", "181.0.0.0"));

solutions from other codewars users:

S1:

function ipsBetween(start, end){
  const num = ip => ip.split('.')
                      .map(x => parseInt(x))
                      .reduce((acc, e) => acc * 256 + e);

  return num(end) - num(start);
}

S2:

function ipsBetween(start, end){
  const ip1 = start.split('.')
  const ip2 = end.split('.')

  let result = 0
  for (let i = 0; i < 4; i++) {
    result += (ip2[i] - ip1[i]) * 256 ** (3 - i)
  }

  return result
}

S3:

function ipsBetween(start, end){
  function val(ip){return ip.split('.').reduce(function(tot,cur,i){return tot+cur*Math.pow(256,3-i)}, 0);}
  return val(end)-val(start);
}

*/

/* IP Validation https://www.codewars.com/kata/515decfd9dcfc23bb6000006/train/javascript

Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

function isValidIP(str) {
  const regEx = /^((25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[0-9])(\.(?!$)|$)){4}$/;
  return regEx.test(str);
}

console.log(isValidIP("0.0.0.0"));
console.log(isValidIP("12.255.56.1"));
console.log(isValidIP("137.255.156.100"));
console.log(isValidIP(''));
console.log(isValidIP('abc.def.ghi.jkl'));
console.log(isValidIP('123.456.789.0'));
console.log(isValidIP('12.34.56'));
console.log(isValidIP('01.02.03.04'));
console.log(isValidIP('256.1.2.3'));
console.log(isValidIP('1.2.3.4.5'));
console.log(isValidIP('123,45,67,89'));
console.log(isValidIP('1e0.1e1.1e2.2e2'));
console.log(isValidIP(' 1.2.3.4'));
console.log(isValidIP('1.2.3.4 '));
console.log(isValidIP('12.34.56.-7'));
console.log(isValidIP('1.2.3.4\n'));
console.log(isValidIP('\n1.2.3.4'));
*/

/* 6 kyu Split Strings https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/javascript

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
  return str.length % 2 === 0 ? str.split('').forEach((element, index) => {
    return element[index] + element[index+1]
  }) : false;

}

console.log(solution("djfekdsl"))
console.log(solution("abgds"))

*/

/* Build a pile of Cubes https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/javascript


Examples:
findNb(1071225) --> 45

findNb(91716553919377) --> -1


function findNb(m) {
  let volume = 0;
  let volumeLeft = m;
  let n;

  for (let i = 1; volumeLeft > volume; i++) {
    volume = i * i * i;
    volumeLeft -= volume;
    n = i;
  }

  if (volumeLeft === 0) {
    return n;
  } else {
    return -1;
  }
}

console.log(findNb(4183059834009));
console.log(findNb(24723578342962));

Tests
const { assert } = require('chai');

it("Basic tests",function() {
  assert.strictEqual(findNb(4183059834009), 2022)
  assert.strictEqual(findNb(24723578342962), -1)
  assert.strictEqual(findNb(135440716410000), 4824)
  assert.strictEqual(findNb(40539911473216), 3568)
})

Codewars Solutions:

function findNb(m) {
  var n = 0
  while (m > 0) m -= ++n**3
  return m ? -1 : n
}

function findNb(m) {
  let n = 0;
  let sum = 0;
  while (sum < m) {
    n++;
    sum += Math.pow(n, 3);
  }
  return sum === m ? n : -1;
}

// this is based on the formula that the sum of the first n cubes equals (n * (n + 1) / 2) ^ 2
// also, the sum of the first n cubes is always a square
function findNb(m) {
    m = Math.sqrt(m) * 2;
    if (m != parseInt(m)){
      return -1;
    }
    var result = parseInt(Math.sqrt(m));
    return (result * (result + 1) == m) ? result : -1;
}


*/

/* Human Readable Time https://www.codewars.com/kata/52685f7382004e774f0001f7/solutions/javascript

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

My long and ugly solution:


function humanReadable (seconds) {
  let hours = '00';
  let minutes = '00';

  if (seconds === 0) {
    seconds = '00';
  } else if (seconds > 0 && seconds < 10) {
    seconds = '0' + seconds;
  } else if (seconds >= 60 && seconds <= 599) {
    minutes = '0' + Math.floor(seconds / 60);
    seconds = seconds - minutes * 60;

    if (seconds === 0) {
      seconds = '00';
    } else if (seconds > 0 && seconds < 10) {
      seconds = '0' + seconds;
    }

  } else if (seconds >= 600 && seconds <= 3599) {
    minutes = Math.floor(seconds / 60);
    seconds = seconds - minutes * 60;

    if (seconds === 0) {
      seconds = '00';
    } else if (seconds > 0 && seconds < 10) {
      seconds = '0' + seconds;
    }

  } else if (seconds >= 3600 && seconds <= 35999) {
    hours = '0' + Math.floor(seconds / 3600);
    seconds = seconds - hours * 3600;

    if (seconds === 0) {
      seconds = '00';
    } else if (seconds > 0 && seconds < 10) {
      seconds = '0' + seconds;
    } else if (seconds >= 60 && seconds <= 599) {
      minutes = '0' + Math.floor(seconds / 60);
      seconds = seconds - minutes * 60;

      if (seconds === 0) {
        seconds = '00';
      } else if (seconds > 0 && seconds < 10) {
        seconds = '0' + seconds;
      }

    } else if (seconds >= 600 && seconds <= 3599) {
      minutes = Math.floor(seconds / 60);
      seconds = seconds - minutes * 60;

      if (seconds === 0) {
        seconds = '00';
      } else if (seconds > 0 && seconds < 10) {
        seconds = '0' + seconds;
      }
  }
} else if (seconds >= 36000 && seconds <= 359999) {
  hours = Math.floor(seconds / 3600);
  seconds = seconds - hours * 3600;

  if (seconds === 0) {
    seconds = '00';
  } else if (seconds > 0 && seconds < 10) {
    seconds = '0' + seconds;
  } else if (seconds >= 60 && seconds <= 599) {
    minutes = '0' + Math.floor(seconds / 60);
    seconds = seconds - minutes * 60;

    if (seconds === 0) {
      seconds = '00';
    } else if (seconds > 0 && seconds < 10) {
      seconds = '0' + seconds;
    }

  } else if (seconds >= 600 && seconds <= 3599) {
    minutes = Math.floor(seconds / 60);
    seconds = seconds - minutes * 60;

    if (seconds === 0) {
      seconds = '00';
    } else if (seconds > 0 && seconds < 10) {
      seconds = '0' + seconds;
    }
}

}

  return hours + ':' + minutes + ':' + seconds;
}

console.log(humanReadable(3599));
console.log(humanReadable(936));
console.log(humanReadable(3600));
console.log(humanReadable(59));
console.log(humanReadable(359999));

My solution is sooo long and definitely not very rational. Having checked out other solutions on codewars, I can say that I don't know the tricks used by other users there and I need to study them.

Some solutions:
______________________________

function humanReadable(seconds) {
  var pad = function(x) { return (x < 10) ? "0"+x : x; }
  return pad(parseInt(seconds / (60*60))) + ":" +
         pad(parseInt(seconds / 60 % 60)) + ":" +
         pad(seconds % 60)
}

What is pad?!
______________________________

function humanReadable(seconds) {
var hours = parseInt( seconds / 3600 ) ;
var minutes = parseInt( seconds / 60 ) % 60;
var seconds = seconds % 60;

var pad = function(val){
  return val < 10 ?"0"+val:val;
}

return pad(hours) + ":" +pad(minutes) + ":" + pad(seconds);
}
Pad again!
______________________________

function humanReadable(seconds) {
  return [seconds / 3600, seconds % 3600 / 60, seconds % 60].map(function(v) {
    v = Math.floor(v).toString();
    return v.length == 1 ? '0' + v : v;
  }).join(':');
}

This is very cool and I've studied the methods used here

*/

/* Multiples of 3 or 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)

function solution(number){
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(solution(10));


Solution from codewars:

function solution(number){
  return number < 1 ? 0 : [...new Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);
}

*/

/* Maximum subarray sum

The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

To anyone who doesn't understand the assignment: You have an array e.g [-2, 1, -3, 4, -1, 2, 1, -5, 4] You now have to find out which part of this array gives the biggest sum. In this case, it would be [4, -1, 2, 1] because 4 - 1 + 2 + 1 = 6. No other uninterrupted sequence in that array gives you a bigger sum.



var maxSequence = function(arr){

  let sum = 0;
  let sum1 = 0;
  let sum2 = 0;

  for (let i=arr.length - 4; i >= 0; i--){
    sum1 += arr[i];
    console.log(sum1);
  }

  for (let i=arr.length - 5; i >= 0; i--){
    sum2 += arr[i];
    console.log(sum2);
  }

  if (sum1 > sum2) {
    sum = sum1;
  } else {
    sum = sum2;
  }
  return sum;
}

console.log(maxSequence([4, -1, 5, 2, 8, -3, 6, -3]))
// сумма всего массива: 18; сумма массива без последнего числа: 21

*/

/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

My solution (NB: recursion is mind-blowing!)


function digitalRoot(n) {

  n = String(n).split('').map((num)=>{
    return Number(num)
  }).reduce((a, b) => a + b, 0);

  if (n <= 9) {
    return n;
  } else {
    return digitalRoot(n);
  }
}

console.log(digitalRoot(55));

codewars solutions:

Solution 1:

function digital_root(n) {
  return (n - 1) % 9 + 1;
} - мдэээээ... до такого мне далеко; тут нужно знать математические фишки какие-то, видимо

Solution 2:

function digital_root(n) {
  if (n < 10)
    return n;

  for (var sum = 0, i = 0, n = String(n); i < n.length; i++)
    sum += Number(n[i]);

  return digital_root(sum);
}

*/

/* Love vs friendship

If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice as strong as love :-)

Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

The input will always be made of only lowercase letters and will never be empty.

My solution:

Note: Found new method for myself - .reduce, which helps find the sum of array values.

function wordsToMarks(string){
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const stringArray = string.split('');
  let sum = stringArray.map((a) => alphabet.indexOf(a) + 1).reduce((a,b)=>a+b);
  return sum;
}

console.log(wordsToMarks('rock'));

codewars solutions:

Solution 1:

const wordsToMarks = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)

Solution 2:

function wordsToMarks(str)
{
  var sum = 0;
  for (let i = 0; i < str.length; i++)
    sum += str.charCodeAt(i) - 96;
  return sum;
}


*/

/* Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

Шаги:

1) преобразовать строку в массив через split;
2) удалить небуквенные символы, либо выбрать только буквенные символы;
3) сравнить полученный массив с перевернутым через reverse;



function palindrome(str) {
  let a = str.toLowerCase().split('').map( letter => letter.match(/^[a-z0-9]+$/i) ).join('');
  let b = str.toLowerCase().split('').map( letter => letter.match(/^[a-z0-9]+$/i) ).reverse().join('');
  return a === b;
}

console.log(palindrome("1 eye for of 1 eye."));

*/

// ^[a-z0-9]+$/i - for checking if a character is alphanumeric; /[a-z]/i - for checking if a character is a letter

/* Replace With Alphabet Position

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
  return text;
}

My solution (big & clumsy!):

function alphabetPosition(text) {
  let textArray = text.split('');
  let numberArray = '';
  for (let i = 0; i < textArray.length - 1; i++) {
    if (textArray[i].length === 1 && textArray[i].match(/[a-z]/i)) {
      numberArray += textArray[i].toLowerCase().charCodeAt(0) - 97 + 1 + " ";
  }
}
if (textArray[textArray.length - 1].length === 1 && textArray[textArray.length - 1].match(/[a-z]/i)) {
  numberArray += textArray[textArray.length - 1].toLowerCase().charCodeAt(0) - 97 + 1;
} else {
  numberArray = numberArray.slice(0, -1);
}
  return numberArray;
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))

Other solutions from codewars:

1.
function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++){
    var code = text.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91) result += (code - 64) + " ";
  }

  return result.slice(0, result.length-1);
}

2.
let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');

3.
function alphabetPosition(text) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return text.toLowerCase().split('')
  .filter( letter => {
    let index = alphabet.indexOf(letter);
    return index > -1;
  }  )
  .map( letter => alphabet.indexOf(letter) + 1 )
  .join(' ')
}


*/

/* Jaden Casing Strings
Моё первое самостоятельное (без поиска задачи на Ютубе) решение:
Решение громоздкое, но пока в рамках моих знаний. Надо учиться более рациональным решениям.


String.prototype.toJadenCase = function () {

  let array = this.split(" ");
  let capitalizedString = [];
  let capitalizedWord;
  for (let i = 0; i < array.length - 1; i++) {
    capitalizedWord = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    capitalizedString += capitalizedWord + " ";
  }
  capitalizedString += array[array.length-1].charAt(0).toUpperCase() + array[array.length-1].slice(1);
  return capitalizedString;
};

const someStuff = "here we go yo";

console.log(someStuff.toJadenCase());

Варианты других пользователей:
1.
String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

2.
String.prototype.toJadenCase = function () {
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}

3.
String.prototype.toJadenCase = function () {

  function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return this.split(' ').map(capitalizeFirstLetter).join(' ');
};



*/

/* DESCENDING ORDER

function descendingOrder(n){
  return parseInt(String(n).split('').sort((a, b) => a - b).reverse().join(""));
}

console.log(descendingOrder(436285));
1) Параметры
string
Значение, которое необходимо проинтерпретировать. Если значение параметра string не принадлежит строковому типу, оно преобразуется в него (с помощью абстрактной операции ToString). Пробелы в начале строки не учитываются.

radix
Целое число в диапазоне между 2 и 36, представляющее собой основание системы счисления числовой строки string, описанной выше. В основном пользователи используют десятичную систему счисления и указывают 10. Всегда указывайте этот параметр, чтобы исключить ошибки считывания и гарантировать корректность исполнения и предсказуемость результата. Когда основание системы счисления не указано, разные реализации могут возвращать разные результаты.

Возвращаемое значение
Целое число, полученное парсингом (разбором и интерпретацией) переданной строки. Если первый символ не получилось сконвертировать в число, то возвращается NaN.

В решении не указан radix. Возможно, по умолчанию исп-ся десятичная система.

2) Далее преобразуем число в строку

3) Преобразуем строку в массив

4) Вычисляем из пар чисел большее и меньшее и ставим по возрастанию

5) Меняем порядок в массиве - от большего к меньшему

6) Преобразуем массив в число
*/

//   return parseInt(String(n).split("").sort((a,b) => a - b).reverse().join(""));

/* Descending Order

!!! Что значат a и b? !!!

Code golf (short code):

function descendingOrder(n){
  return parseInt(String(n).split("").sort((a,b) => a - b).reverse().join(""));
}

descendingOrder();

longer version:

function descendingOrder(n){
  let strNum = String(n);
      strNumArr = strNum.split("");
      strNumArrSorted = strNumArr.sort((a,b) => a - b);
      strNumArrSorted = strNumArrSorted.reverse();
      strNum = strNumArrSorted.join("");
      return parseInt(strNum);
}

other versions:
1
function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}

2
function descendingOrder(n){
  return +(n + '').split('').sort(function(a,b){ return b - a }).join('');
}

3
function descendingOrder(n){
  return parseInt(n.toString().split('').sort().reverse().join(''), 10);
}

*/
