/*
Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]


Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)


Things to consider when deciding on the status and change:

1) calculate the change due;
2) compare it to the corresponding ranges (from 0.01 to 0.04, from 0.05 to 0.09, from 0.1 to 0.4, from 0.5 to 0.9, from 1 to 4, from 5 to 9, from 10 to 19, ??? )

*/ 

// const obj = {
//   price: []
// }

// obj.price.push('hello')

// console.log(obj.price)

const statusArr = [
  {status: "INSUFFICIENT_FUNDS", change: []},
  // return if cash-in-drawer is less than the change due, or if you cannot return the exact change
  {status: "CLOSED", change: []},
  // return with cash-in-drawer as the value for the key change if it is equal to the change due
  {status: "OPEN", change: []}
  // return with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
]

const units = {
        'ONE HUNDRED': 10000,
        'TWENTY': 2000,
        'TEN': 1000,
        'FIVE': 500,
        'ONE': 100,
        'QUARTER': 25,
        'DIME': 10,
        'NICKEL': 5,
        'PENNY': 1
      }


function checkCashRegister(price, cash, cid) {
  let changeAmount = cash*100 - price*100;
  let cidTotal = 0;
  for (let element of cid) {
    cidTotal += element[1]*100;
  }
    if (changeAmount > cidTotal) {
      return statusArr[0];
    } else if (changeAmount === cidTotal) {
      statusArr[1].change = cid;
      return statusArr[1];
    } else {
      let cashLeft = [];
      cid = cid.reverse();

      for (let element of cid) {
        let accumulator = [element[0], 0];
        element[1] = element[1]*100;
        while (changeAmount >= units[element[0]] && element[1] > 0) {
          changeAmount -= units[element[0]];
          element[1] -= units[element[0]];
          accumulator[1] += units[element[0]]/100;
        }
        if (accumulator[1] > 0) {
          cashLeft.push(accumulator);
        }
      }
      if (changeAmount > 0) {
        return statusArr[0];
      }
      statusArr[2].change = cashLeft;
      return statusArr[2];
    }
  }
  
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));



// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.


/* Telephone Number Validator

Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.


function telephoneCheck(str) {

  let regEx = /^1?\s?(\d{3}|\(\d{3}\))(-| )?\d{3}(-| )?\d{4}$/g;
  return regEx.test(str);
  
}

console.log(telephoneCheck("555-555-5555"));

*/ 
/* Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.



function rot13(str) {

  const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  let arr = str.split('');
  let newArr = [];

  for (let i=0; i<arr.length; i++) {

    let oldIndex = capitalLetters.indexOf(arr[i]);

    if (oldIndex >= 13) {
      newArr.push(capitalLetters[oldIndex - 13]);
    } else if (oldIndex < 13 && oldIndex >= 0) {
      newArr.push(capitalLetters[oldIndex + 13]);
    } else {
      newArr.push(arr[i]);
    }
  }
  
  console.log(newArr.join(''));
  return newArr.join('');
}

rot13("SERR PBQR PNZC");


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

^[a-z0-9]+$/i - for checking if a character is alphanumeric; /[a-z]/i - for checking if a character is a letter

function palindrome(str) {
  let a = str.toLowerCase().split('').map( letter => letter.match(/^[a-z0-9]+$/i) ).join('');
  let b = str.toLowerCase().split('').map( letter => letter.match(/^[a-z0-9]+$/i) ).reverse().join('');
  return a === b;
}

console.log(palindrome("1 eye for of 1 eye."));


*/


/* Roman Numeral Converter

function convertedNum (num) {
  const numConverter = [
  { arabicNum: 0,  romanNum: '' },
  { arabicNum: 1,  romanNum: 'I' },
  { arabicNum: 2,  romanNum: 'II' },
  { arabicNum: 3,  romanNum: 'III' },
  { arabicNum: 4,  romanNum: 'IV' },
  { arabicNum: 5,  romanNum: 'V' },
  { arabicNum: 6,  romanNum: 'VI' },
  { arabicNum: 7,  romanNum: 'VII' },
  { arabicNum: 8,  romanNum: 'VIII' },
  { arabicNum: 9,  romanNum: 'IX' },
  { arabicNum10: 0,  romanNum: '' },
  { arabicNum10: 1,  romanNum: 'X' },
  { arabicNum10: 2,  romanNum: 'XX' },
  { arabicNum10: 3,  romanNum: 'XXX' },
  { arabicNum10: 4,  romanNum: 'XL' },
  { arabicNum10: 5,  romanNum: 'L' },
  { arabicNum10: 6,  romanNum: 'LX' },
  { arabicNum10: 7,  romanNum: 'LXX' },
  { arabicNum10: 8,  romanNum: 'LXXX' },
  { arabicNum10: 9,  romanNum: 'XC' },
  { arabicNum100: 0,  romanNum: '' },
  { arabicNum100: 1,  romanNum: 'C' },
  { arabicNum100: 2,  romanNum: 'CC' },
  { arabicNum100: 3,  romanNum: 'CCC' },
  { arabicNum100: 4,  romanNum: 'CD' },
  { arabicNum100: 5,  romanNum: 'D' },
  { arabicNum100: 6,  romanNum: 'DC' },
  { arabicNum100: 7,  romanNum: 'DCC' },
  { arabicNum100: 8,  romanNum: 'DCCC' },
  { arabicNum100: 9,  romanNum: 'CM' },
  { arabicNum1000: 1,  romanNum: 'M' },
  { arabicNum1000: 2,  romanNum: 'MM' },
  { arabicNum1000: 3,  romanNum: 'MMM' }

]
  if (num.toString().length === 4) {
    const numArray = num.toString().split('');
    const newRoman = numConverter.find((number) => {
      return number.arabicNum1000 == numArray[0]; 
    }).romanNum + numConverter.find((number) => {
      return number.arabicNum100 == numArray[1]; 
    }).romanNum + numConverter.find((number) => {
      return number.arabicNum10 == numArray[2]; 
    }).romanNum + numConverter.find((number) => {
      return number.arabicNum == numArray[3]; 
    }).romanNum;
    console.log(newRoman);
    return newRoman;
  } else if (num.toString().length === 3) {
    const numArray = num.toString().split('');
    const newRoman = numConverter.find((number) => {
      return number.arabicNum100 == numArray[0]; 
    }).romanNum + numConverter.find((number) => {
      return number.arabicNum10 == numArray[1]; 
    }).romanNum + numConverter.find((number) => {
      return number.arabicNum == numArray[2]; 
    }).romanNum;
    console.log(newRoman);
    return newRoman;
  } else if (num.toString().length === 2) {
    const numArray = num.toString().split('');
    const newRoman = numConverter.find((number) => {
      return number.arabicNum10 == numArray[0]; 
    }).romanNum + numConverter.find((number) => {
      return number.arabicNum == numArray[1]; 
    }).romanNum;
    console.log(newRoman);
    return newRoman;
  } else {
    return numConverter.find((number) => {
    return number.arabicNum === num; 
  }).romanNum;
  }
}

console.log(convertedNum(3970));

*/


