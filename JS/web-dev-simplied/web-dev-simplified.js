
let string = "Hello there cool dudes";
let array = string.split(' ');
console.log(array);
let addWord = 'guys'
array.splice(3, 1, addWord);

console.log(array)

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);


/* REGULAR EXPRESSIONS https://youtu.be/rhzKDrUiJVk

Regexes are a way to search through a string of text in an advanced way, e.g. for validation, finding and replacement, etc.

/ / - forward slashes

flags
g - global
i - case insensitive
m - multiline

e+ - match as many e's in a row as possible
e+a? - Matches any string that contains zero or one occurrences of a
ea* - Matches any string that contains zero or more occurrences of a
.at - . matches anything except for a new line
\. - to look for . a back slash is needed;
\w - match any character
\W - match what is not a character
\s - match any whitespace
\S - match anything but whitespaces
\d - match any digit
\D - match anything but digits
\w{4} - match any 4 digits or more // test result: [
    "thin",
    "know",
    "does",
    "even",
    "matt", - it just took 4 first letters of the word
    "hard"
]
\w{4, 5} - match any set of characters between 4 & 5
\[fc]at - match anything which starts with f or c and end in at
[a-zA-Z]at - match anything which starts with a letter, non-capital or capital, and ends in at
[0-9]at
(t|e|r){2,3} - matches occurrences of the letters in parenthesis, either when there are 2 or 3 of them, in any order
(re){2,3} - the {2,3} affects both r & e
re{2,3} - the {2,3} affects only e
^ - caret, to match the beginning of a line
$ - matches the end of a statement
(?<=do) - positive look-behind - matches anything that comes before the specified character or set; < - means behind, = means positive
(?<!do) - negative look-behind - matches anything except for what comes before the specified character or set
(?<at)

let testString = 'One thing I don\'t know why 5 it doesn\'t even matter how 6 hard you try wow low allow.'
let regEx1 = /(?<!\s)/g;

let result1 = testString.match(regEx1);
console.log(result1);

let regEx2 = /(?<!o)./g;
let result2 = testString.match(regEx2);
console.log(result2);

*/

// let testNumber3 = '645-5437-66382';
// let testNumber4 = '645543766382';
// let testNumber5 = '645 5437 66382';

// let regEx3 = /\d{3}(-| )?\d{4}(-| )?\d{5}/g; //or /\d{3}[ -]?\d{4}[ -]?\d{5}/g;
// let result3 = testNumber3.match(regEx3);
// let result4 = testNumber4.match(regEx3);
// let result5 = testNumber5.match(regEx3);
// console.log(result3);
// console.log(result4);
// console.log(result5);




/* 8 Must Know JavaScript Array Methods
https://youtu.be/R8rmfD9Y5-c

1) filter - based on true/false

the items complying with the condition are included in the new array, while the others aren't.

const hogwartsStudents = [
  { name: 'Harry',  house: 'Gryffindor' },
  { name: 'Ron',  house: 'Gryffindor' },
  { name: 'Hermione',  house: 'Gryffindor' },
  { name: 'Draco',  house: 'Slytherin' },
  { name: 'Voldemort',  house: 'Slytherin' },
  { name: 'Luna',  house: 'Ravenclaw' },
  { name: 'Cedric',  house: 'Hufflepuff' }
]

const filteredStudents = hogwartsStudents.filter((student) => {
  return student.house === 'Gryffindor'
})

console.log(filteredStudents)

2) map - finds the value of the specified property

const hogwartsStudents = [
  { name: 'Harry',  house: 'Gryffindor' },
  { name: 'Ron',  house: 'Gryffindor' },
  { name: 'Hermione',  house: 'Gryffindor' },
  { name: 'Draco',  house: 'Slytherin' },
  { name: 'Voldemort',  house: 'Slytherin' },
  { name: 'Luna',  house: 'Ravenclaw' },
  { name: 'Cedric',  house: 'Hufflepuff' }
]

const studentNames = hogwartsStudents.map((student) => {
  return student.house;
})

console.log(studentNames)

3) find - finds the items with the specified value

const hogwartsStudents = [
  { name: 'Harry',  house: 'Gryffindor' },
  { name: 'Ron',  house: 'Gryffindor' },
  { name: 'Hermione',  house: 'Gryffindor' },
  { name: 'Draco',  house: 'Slytherin' },
  { name: 'Voldemort',  house: 'Slytherin' },
  { name: 'Luna',  house: 'Ravenclaw' },
  { name: 'Cedric',  house: 'Hufflepuff' }
]

const foundStudent = hogwartsStudents.find((student) => {
  return student.house === 'Dumbledore';
})

console.log(foundStudent)

4) forEach - prints the values of each of the specified properties

const hogwartsStudents = [
  { name: 'Harry',  house: 'Gryffindor' },
  { name: 'Ron',  house: 'Gryffindor' },
  { name: 'Hermione',  house: 'Gryffindor' },
  { name: 'Draco',  house: 'Slytherin' },
  { name: 'Voldemort',  house: 'Slytherin' },
  { name: 'Luna',  house: 'Ravenclaw' },
  { name: 'Cedric',  house: 'Hufflepuff' }
]

hogwartsStudents.forEach((student) => {
  console.log(student.house);
})

5) some - checks if the array contains the specified value and prints true/false depending on whether it does or not

const hogwartsStudents = [
  { name: 'Harry',  house: 'Gryffindor' },
  { name: 'Ron',  house: 'Gryffindor' },
  { name: 'Hermione',  house: 'Gryffindor' },
  { name: 'Draco',  house: 'Slytherin' },
  { name: 'Voldemort',  house: 'Slytherin' },
  { name: 'Luna',  house: 'Ravenclaw' },
  { name: 'Cedric',  house: 'Hufflepuff' }
]

const evilStudents = hogwartsStudents.some((student) => {
 return student.house === 'Hufflepuff';
})

console.log(evilStudents)

6) every - checks if every items complies with the condition

const hogwartsStudents = [
  { name: 'Harry',  house: 'Gryffindor', siblings: 0 },
  { name: 'Ron',  house: 'Gryffindor', siblings: 6 },
  { name: 'Hermione',  house: 'Gryffindor', siblings: 0 },
  { name: 'Draco',  house: 'Slytherin', siblings: 0 },
  { name: 'Voldemort',  house: 'Slytherin', siblings: 0 },
  { name: 'Luna',  house: 'Ravenclaw', siblings: 0 },
  { name: 'Cedric',  house: 'Hufflepuff', siblings: 0 }
]

const evilStudents = hogwartsStudents.every((student) => {
 return student.siblings > 0;
})

console.log(evilStudents)

7) reduce - not just returns sth, but performs some operation first

reduce runs a function on every single item
the currentTotal is whatever the previous iteration returned
"student" is the actual item in the array
"0" is the initial value of currentTotal 
the function takes currentTotal as the first parameter

const hogwartsStudents = [
  { name: 'Harry',  house: 'Gryffindor', siblings: 0 },
  { name: 'Ron',  house: 'Gryffindor', siblings: 6 },
  { name: 'Hermione',  house: 'Gryffindor', siblings: 0 },
  { name: 'Draco',  house: 'Slytherin', siblings: 0 },
  { name: 'Voldemort',  house: 'Slytherin', siblings: 0 },
  { name: 'Luna',  house: 'Ravenclaw', siblings: 0 },
  { name: 'Cedric',  house: 'Hufflepuff', siblings: 0 }
]

const totalSiblings = hogwartsStudents.reduce((currentTotal, student) => {
 return student.siblings + currentTotal
}, 0)

console.log(totalSiblings)

8) includes - it doesn't take a function but a single argument


*/


/* let getStatistics = function (players) {
  let totalGoals = 0;
  for (j = 0; j < players.length; j++) {
    totalGoals += players[j].goals;
  }
  
  for (let i = 0; i < players.length; i++) {
    players[i].coefficient = players[i].goals * 2 + players[i].passes;
    players[i].percent = Math.round(players[i].goals * 100 / totalGoals);
  }
  return players;
};

let playerOne = {
  'name': 'Lampard',
  'goals': 2,
  'passes': 2
}

let playerTwo = {
  'name': 'Terry',
  'goals': 10,
  'passes': 1
}

let playerThree = {
  'name': 'Drogba',
  'goals': 3,
  'passes': 2
}

let playersList = [playerOne, playerTwo, playerThree];

console.log(getStatistics(playersList));
console.log(playersList);

*/

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