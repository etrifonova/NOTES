// Regular Expressions 

/* 

*/

/* 

*/

/* Check For Mixed Grouping of Characters
Sometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses ().

If you want to find either Penguin or Pumpkin in a string, you can use the following Regular Expression: /P(engu|umpk)in/g

Then check whether the desired string groups are in the test string by using the test() method.

let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
The test method here would return true.

Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.

Then fix the code so that the regex that you have created is checked against myString and either true or false is returned depending on whether the regex matches.



*/

/* Positive and Negative Lookahead
Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string.

There are two kinds of lookaheads: positive lookahead and negative lookahead.

A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.

Lookaheads are a bit confusing but some examples will help.

let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);
Both of these match calls would return ["q"].

A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);
Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2,})/; // Change this line
let result = pwRegex.test(sampleWord);



*/

/* Check for All or None
Sometimes the patterns you want to search for may have parts of it that may or may not exist. However, it may be important to check for them nonetheless.

You can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.

For example, there are slight differences in American and British English and you can use the question mark to match both spellings.

let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);
Both uses of the test method would return true.

Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.

let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);

*/

/* Specify Exact Number of Matches
You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want a specific number of matches.

To specify a certain number of patterns, just have that one number between the curly brackets.

For example, to match only the word hah with the letter a 3 times, your regex would be /ha{3}h/.

let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4);
multipleHA.test(A3);
multipleHA.test(A100);
In order, the three test calls would return false, true, and false.

Change the regex timRegex to match the word Timber only when it has four letter m's.

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);

*/

/* Specify Only the Lower Number of Matches
You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want to specify the lower number of patterns with no upper limit.

To only specify the lower number of patterns, keep the first number followed by a comma.

For example, to match only the string hah with the letter a appearing at least 3 times, your regex would be /ha{3,}h/.

let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);
In order, the three test calls would return true, false, and true.

Change the regex haRegex to match the word Hazzah only when it has four or more letter z's.

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);

*/

/* Specify Upper and Lower Number of Matches
Recall that you use the plus sign + to look for one or more characters and the asterisk * to look for zero or more characters. These are convenient but sometimes you want to match a certain range of patterns.

You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets ({ and }). You put two numbers between the curly brackets - for the lower and upper number of patterns.

For example, to match only the letter a appearing between 3 and 5 times in the string ah, your regex would be /a{3,5}h/.

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);
The first test call would return true, while the second would return false.

Change the regex ohRegex to match the entire phrase Oh no only when it has 3 to 6 letter h's.

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line НАДО БЫЛО ПРОБЕЛ ЕЩЕ ПОСТАВИТЬ \s
let result = ohRegex.test(ohStr);

*/

/* Match Non-Whitespace Characters
You learned about searching for whitespace using \s, with a lowercase s. You can also search for everything except whitespace.

Search for non-whitespace using \S, which is an uppercase s. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. You can think of it being similar to the character class [^ \r\t\f\n\v].

let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;
The value returned by the .length method would be 32.

Change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string.

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);

*/

/* Match Whitespace
The challenges so far have covered matching letters of the alphabet and numbers. You can also match the whitespace or spaces between letters.

You can search for whitespace using \s, which is a lowercase s. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character class [ \r\t\f\n\v].

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
This match call would return [" ", " "].

Change the regex countWhiteSpace to look for multiple whitespace characters in a string.

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s+/g; // Change this line
let result = sample.match(countWhiteSpace);

*/

/* Restrict Possible Usernames
Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

Usernames can only use alpha-numeric characters.

The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

Username letters can be lowercase and uppercase.

Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

Solution 1 (Click to Show/Hide)
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);
console.log(result)
Code Explanation
^ - start of input
[a-z] - first character is a letter
[a-z]+ - following characters are letters
\d*$ - input ends with 0 or more digits
| - or
^[a-z] - first character is a letter
\d\d+ - following characters are 2 or more digits
$ - end of input

Solution 2 (Click to Show/Hide)
let username = "JackOfAllTrades";
const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result = userCheck.test(username);
Code Explanation
^ - start of input
[a-z] - first character is a letter
[0-9]{2,} - ends with two or more numbers
| - or
[a-z]+ - has one or more letters next
\d* - and ends with zero or more numbers
$ - end of input
i - ignore case of input



*/

/* Match All Non-Numbers
The last challenge showed how to search for digits using the shortcut \d with a lowercase d. You can also search for non-digits using a similar shortcut that uses an uppercase D instead.

The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;

*/

/* Match All Numbers
You've learned shortcuts for common string patterns like alphanumerics. Another common pattern is looking for just digits or numbers.

The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;

*/

/* Match Everything But Letters and Numbers
You've learned that you can use a shortcut to match alphanumerics [A-Za-z0-9_] using \w. A natural pattern you might want to search for is the opposite of alphanumerics.

You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].

let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);
The first match call would return the value ["%"] and the second would return ["!"].

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

*/


/* Match All Letters and Numbers
Using character classes, you were able to search for all letters of the alphabet with [a-z]. This kind of character class is common enough that there is a shortcut for it, although it includes a few extra characters as well.

The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_).

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);
All four of these test calls would return true.

These shortcut character classes are also known as shorthand character classes.

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

*/

/* Match Ending String Patterns
In the last challenge, you learned to use the caret character to search for patterns at the beginning of strings. There is also a way to search for patterns at the end of strings.

You can search the end of strings using the dollar sign character $ at the end of the regex.

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
The first test call would return true, while the second would return false.

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);

*/


/* Match Beginning String Patterns
Prior challenges showed that regular expressions can be used to look for a number of matches. They are also used to search for patterns in specific positions in strings.

In an earlier challenge, you used the caret character (^) inside a character set to create a negated character set in the form [^thingsThatWillNotBeMatched]. Outside of a character set, the caret is used to search for patterns at the beginning of strings.

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
The first test call would return true, while the second would return false.

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

*/

/* Find One or More Criminals in a Hunt
Time to pause and test your new regex writing skills. A group of criminals escaped from jail and ran away, but you don't know how many. However, you do know that they stay close together when they are around other people. You are responsible for finding all of the criminals at once.

Here's an example to review how to do this:

The regex /z+/ matches the letter z when it appears one or more times in a row. It would find matches in all of the following strings:

"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"
But it does not find matches in the following strings since there are no letter z characters:

""
"ABC"
"abcabc"

let reCriminals = /C+/; // Change this line

*/



/* Find Characters with Lazy Matching
In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.

You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically a pattern that starts with t, ends with i, and has some letters in between.

Regular expressions are by default greedy, so the match would return ["titani"]. It finds the largest sub-string possible to fit the pattern.

However, you can use the ? character to change it to lazy matching. "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].

Note: Parsing HTML with regular expressions should be avoided, but pattern matching an HTML string with regular expressions is completely fine.

let text = "<h1>Winter is coming</h1>";
let myRegex = /<h[0-9]*?>/; // Change this line
let result = text.match(myRegex);

*/


/* Match Characters that Occur Zero or More Times
The last challenge used the plus + sign to look for characters that occur one or more times. There's also an option that matches characters that occur zero or more times.

The character to do this is the asterisk or star: *.

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
// let goRegex = /go*/;
/*soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
In order, the three match calls would return the values ["goooooooo"], ["g"], and null.

// Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

/* let result = chewieQuote.match(chewieRegex);*/


/* Match Characters that Occur One or More Times
Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated.

You can use the + character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.

For example, /a+/g would find one match in abc and return ["a"]. Because of the +, it would also find a single match in aabc and return ["aa"].

If it were instead checking the string abab, it would find two matches and return ["a", "a"] because the a characters are not in a row - there is a b between them. Finally, since there is no a in the string bcd, it wouldn't find a match.

let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);

*/


/* Match Single Characters Not Specified
So far, you have created a set of characters that you want to match, but you could also create a set of characters that you do not want to match. These types of character sets are called negated character sets.

To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.

For example, /[^aeiou]/gi matches all characters that are not a vowel. Note that characters like ., !, [, @, / and white space are matched - the negated vowel character set only excludes the vowel characters.

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

*/

/* Match Numbers and Letters of the Alphabet
Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.

For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.

Also, it is possible to combine a range of letters and numbers in a single character set.

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line

*/

/* Match Letters of the Alphabet
You saw how you can use character sets to specify a group of characters to match, but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple.

Inside a character set, you can define a range of characters to match using a hyphen character: -.

For example, to match lowercase letters a through e you would use [a-e].

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);
In order, the three match calls would return the values ["cat"], ["bat"], and null.

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

*/

/* Match Single Character with Multiple Possibilities
You learned how to match literal patterns (/literal/) and wildcard character (/./). Those are the extremes of regular expressions, where one finds exact matches and the other matches everything. There are options that are a balance between the two extremes.

You can search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters a, i, or u.

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);
In order, the four match calls would return the values ["big"], ["bag"], ["bug"], and null.

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line

*/

/* Match Anything with Wildcard Period
Sometimes you won't (or don't need to) know the exact characters in your patterns. Thinking of all words that match, say, a misspelling would take a long time. Luckily, you can save time using the wildcard character: .

The wildcard character . will match any one character. The wildcard is also called dot and period. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);
Both of these test calls would return true.

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);

*/

/* Find More Than the First Match
So far, you have only been able to extract or search a pattern once.

let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
Here match would return ["Repeat"].

To search or extract a pattern more than once, you can use the global search flag: g.

let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
And here match returns the value ["Repeat", "Repeat", "Repeat"]

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/ig; // Change this line
let result = twinkleStar.match(starRegex); // Change this line

*/

/* Extract Matches
So far, you have only been checking if a pattern exists or not within a string. You can also extract the actual matches you found with the .match() method.

To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.

Here's an example:

"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
Here the first match would return ["Hello"] and the second would return ["expressions"].

Note that the .match syntax is the "opposite" of the .test method you have been using thus far:

'string'.match(/regex/);
/regex/.test('string');

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line

*/

/* Ignore Case While Matching
Up until now, you've looked at regexes to do literal matches of strings. But sometimes, you might want to also match case differences.

Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. Examples of uppercase are A, B, and C. Examples of lowercase are a, b, and c.

You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the i flag. You can use it by appending it to the regex. An example of using this flag is /ignorecase/i. This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.

let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result = fccRegex.test(myString);

*/

/* Match a Literal String with Different Possibilities
Using regexes like /coding/, you can look for the pattern coding in another string.

This is powerful to search single strings, but it's limited to only one pattern. You can search for multiple patterns using the alternation or OR operator: |.

This operator matches patterns either before or after it. For example, if you wanted to match the strings yes or no, the regex you want is /yes|no/.

You can also search for more than just two patterns. You can do this by adding more patterns with more OR operators separating them, like /yes|no|maybe/.

let petString = "James has a pet cat.";
let petRegex = /change|dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);

*/

/* Match Literal Strings
In the last challenge, you searched for the word Hello using the regular expression /Hello/. That regex searched for a literal match of the string Hello. Here's another example searching for a literal match of the string Kevin:

let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);
This test call will return true.

Any other forms of Kevin will not match. For example, the regex /Kevin/ will not match kevin or KEVIN.

let wrongRegex = /kevin/;
wrongRegex.test(testStr);
This test call will return false.

A future challenge will show how to match those other forms as well.

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);

*/

/*Using the Test Method
Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.

If you want to find the word the in the string The dog chased the cat, you could use the following regular expression: /the/. Notice that quote marks are not required within the regular expression.

JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.

let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
The test method here returns true.

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line

*/


// -----------------------------------------------------------

/* Handle a Rejected Promise with catch
catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called. Here’s the syntax:

myPromise.catch(error => {
  
});
error is the argument passed in to the reject method.

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
    makeServerRequest.catch((error) => {
      console.log(error);
    })

  }
});

makeServerRequest.then(result => {
  console.log(result);
});


*/

/* Handle a Fulfilled Promise with then
Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. This can be achieved by using the then method. The then method is executed immediately after your promise is fulfilled with resolve. Here’s an example:

myPromise.then(result => {
  
});
result comes from the argument given to the resolve method.

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
    makeServerRequest.then(result => {
      console.log(result);
    })
  } else {  
    reject("Data not received");
  }
});


*/

/* Complete a Promise with resolve and reject
A promise has three states: pending, fulfilled, and rejected. The promise you created in the last challenge is forever stuck in the pending state because you did not add a way to complete the promise. The resolve and reject parameters given to the promise argument are used to do this. resolve is used when you want your promise to succeed, and reject is used when you want it to fail. These are methods that take an argument, as seen below.

const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
The example above uses strings for the argument of these functions, but it can really be anything. Often, it might be an object, that you would use data from, to put on your website or elsewhere.

*/

/* Create a JavaScript Promise
A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. When the task completes, you either fulfill your promise or fail to do so. Promise is a constructor function, so you need to use the new keyword to create one. It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise. The syntax looks like this:

const myPromise = new Promise((resolve, reject) => {

});


*/

/* Import a Default Export
In the last challenge, you learned about export default and its uses. To import a default export, you need to use a different import syntax. In the following example, add is the default export of the math_functions.js file. Here is how to import it:

import add from "./math_functions.js";
The syntax differs in one key place. The imported value, add, is not surrounded by curly braces ({}). add here is simply a variable name for whatever the default export of the math_functions.js file is. You can use any name here when importing a default.

*/

/* Create an Export Fallback with export default
In the export lesson, you learned about the syntax referred to as a named export. This allowed you to make multiple functions and variables available for use in other files.

There is another export syntax you need to know, known as export default. Usually you will use this syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module.

Below are examples using export default:

export default function add(x, y) {
  return x + y;
}

export default function(x, y) {
  return x + y;
}
The first is a named function, and the second is an anonymous function.

Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use export default with var, let, or const

*/

/* Use * to Import Everything from a File
Suppose you have a file and you wish to import all of its contents into the current file. This can be done with the import * as syntax. Here's an example where the contents of a file named math_functions.js are imported into a file in the same directory:

import * as myMathModule from "./math_functions.js";
The above import statement will create an object called myMathModule. This is just a variable name, you can name it anything. The object will contain all of the exports from math_functions.js in it, so you can access the functions like you would any other object property. Here's how you can use the add and subtract functions that were imported:

myMathModule.add(2,3);
myMathModule.subtract(5,3);

*/

/* Use export to Share a Code Block
Imagine a file called math_functions.js that contains several functions related to mathematical operations. One of them is stored in a variable, add, that takes in two numbers and returns their sum. You want to use this function in several different JavaScript files. In order to share it with these other files, you first need to export it.

export const add = (x, y) => {
  return x + y;
}
The above is a common way to export a single function, but you can achieve the same thing like this:

const add = (x, y) => {
  return x + y;
}

export { add };
When you export a variable or function, you can import it in another file and use it without having to rewrite the code. You can export multiple things by repeating the first example for each thing you want to export, or by placing them all in the export statement of the second example, like this:

export { add, subtract };


*/

/*
Use export to Share a Code Block
Imagine a file called math_functions.js that contains several functions related to mathematical operations. One of them is stored in a variable, add, that takes in two numbers and returns their sum. You want to use this function in several different JavaScript files. In order to share it with these other files, you first need to export it.

export const add = (x, y) => {
  return x + y;
}
*/

/* Create a Module Script
JavaScript started with a small role to play on an otherwise mostly HTML web. Today, it’s huge, and some websites are built almost entirely with JavaScript. In order to make JavaScript more modular, clean, and maintainable; ES6 introduced a way to easily share code among JavaScript files. This involves exporting parts of a file for use in one or more other files, and importing the parts you need, where you need them. In order to take advantage of this functionality, you need to create a script in your HTML document with a type of module. Here’s an example:

<script type="module" src="filename.js"></script>
A script that uses this module type can now use the import and export features you will learn about in the upcoming challenges.
*/

/* Use getters and setters to Control Access to an Object СЛОЖНО!!!

You can obtain values from an object and set the value of a property within an object.

These are classically called getters and setters.

Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.

Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);
The console would display the strings anonymous and newAuthor.

Notice the syntax used to invoke the getter and setter. They do not even look like functions. Getters and setters are important because they hide internal implementation details.

Note: It is convention to precede the name of a private variable with an underscore (_). However, the practice itself does not make a variable private.

// Only change code below this line

class Thermostat {
  constructor (temperature) {
    this._temperature = 5/9 * (temperature - 32);
  }

  get tempInCelsius() {
    return this._temperature;
  }

  set tempInCelsius(convertedTemp) {
    this._temperature = convertedTemp;
  }
}

// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

class Book {
    constructor(author) {
        this._author = author;
    }
    //getter, for the user to get the value of a private variable without getting access to it (in this case _author)
    get writer(){
        return this._author;
    }
    //setter
    set writer(updateAuthor){
        this._author = updateAuthor;
    }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);

function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32);
        }
        get temperature() {
            return this._temp;
        }
        set temperature(updatedTemp) {
            this._temp=updatedTemp;
        }
}
return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
console.log(temp);

РЕШЕНИЕ:

// Only change code below this line

class Thermostat {
  constructor (fahrenheit) {
    this._fahrenheit = fahrenheit;
  }

  get temperature() {
    return (5/9) * (this._fahrenheit - 32);
  }

  set temperature(celsius) {
    this._fahrenheit = celsius * 9.0 / 5 + 32;
  }
}

// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

*/ 
// Синтаксис get связывает свойство объекта с функцией, которая будет вызываться при обращении к этому свойству.
// Оператор set связывает свойство объекта с функцией, которая будет вызвана при попытке установить это свойство.



/* const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
      failureItems.push(`<li class="text-warning">&{arr[i]}</li>`);
    }
    
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);

  console.log(failuresList)


/* https://youtu.be/PkZNo7MFNFg 
3:25:26 Import a Default Export НЕПОНЯТНО


import subtract from "math_functions";

subtract(7,4);

*/


/* 3:24:50 export default НЕПОНЯТНО

export default function subtract(x,y) {return x - y ;}


*/

/* 3:23:40 * to Import

import * as capitalizeStrings from "./import";

*/

/* 3:22:33 export (to reuse a code block) ПРОБЛЕМЫ!

const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export { capitalizeString };



*/


/* 3:20:25 import vs require

import { capitalizeString } from "./string_function.js";
const cap = capitalizeString("hello!");

console.log(cap);



*/


/* 3:15:11 getters and setters
Синтаксис get связывает свойство объекта с функцией, которая будет вызываться при обращении к этому свойству.
Оператор set связывает свойство объекта с функцией, которая будет вызвана при попытке установить это свойство.

class Book {
    constructor(author) {
        this._author = author;
    }
    //getter, for the user to get the value of a private variable without getting access to it (in this case _author)
    get writer(){
        return this._author;
    }
    //setter
    set writer(updateAuthor){
        this._author = updateAuthor;
    }
}

function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);



*/



/* 3:12:56 class Syntax

ES6 provides syntax to create objects using the class keyword

//simple way
var SpaceShuttle = function(targetPlanet) {
    this.targetPlanet = targetPlanet;
}

var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet)

//using class syntax
class SpaceShuttle {
    constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
    }
}

var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet)

function makeClass() {
    class Vegetable {
        constructor(name){
            this.name = name;
        }
    }
    return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('pepper');
console.log(carrot.name);

*/



/* 3:12:24 Declarative Functions

an object can contain a function. 

//the long way
const bicycle1 = {
    gear: 2,
    setGear: function(newGear) {
        "use strict";
        this.gear = newGear;
    }
};

bicycle1.setGear(3);
console.log(bicycle1.gear);

//the short way
const bicycle1 = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};

bicycle1.setGear(3);
console.log(bicycle1.gear);

*/


/* 3:10:43 Simple Fields

//way 1 
const createPerson1 = (name, age, gender) => {

    return {
        name: name,
        age: age,
        gender: gender // we're repeating the same words
    };

}

console.log(createPerson1("Zodiac Hasbro, 56", "male"));

//way 2 
const createPerson2 = (name, age, gender) => ( { name, age, gender});


console.log(createPerson2("Zodiac Hasbro, 56", "male"));

Write Concise Object Literal Declarations Using Object Property Shorthand
ES6 adds some nice support for easily defining object literals.

Consider the following code:

const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
getMousePosition is a simple function that returns an object containing two properties. ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood. Here is the same function from above rewritten to use this new syntax:

const getMousePosition = (x, y) => ({ x, y });

*/


/* 3:06:39 Template Literals (шаблонные литералы)

Шаблонными литералами называются строковые литералы, допускающие использование выражений (you can put variables inside the string with ${}) внутри. С ними вы можете использовать 1) многострочные литералы (multiline strings) и строковую интерполяцию. В спецификациях до ES2015 они назывались "шаблонными строками".

const person = {
    name: "Zodiac Hasbro",
    age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`; 

console.log(greeting);

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["max-length", "no-amd", "no-dup-keys"]
};
function makeList(arr) {
    const resultDisplayArray = [];
    for (let i=0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
    }

    return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray)

Create Strings using Template Literals
A new feature of ES6 is the template literal. This is a special type of string that makes creating complex strings easier.

Template literals allow you to create multi-line strings and to use string interpolation features to create strings.

Consider the code below:

const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);
The console will display the strings Hello, my name is Zodiac Hasbro! and I am 56 years old..

A lot of things happened there. Firstly, the example uses backticks (`), not quotes (' or "), to wrap the string. Secondly, notice that the string is multi-line, both in the code and the output. This saves inserting \n within strings. The ${variable} syntax used above is a placeholder. Basically, you won't have to use concatenation with the + operator anymore. To add variables to strings, you just drop the variable in a template string and wrap it with ${ and }. Similarly, you can include other expressions in your string literal, for example ${a + b}. This new way of creating strings gives you more flexibility to create robust strings.

*/


/* 3:05:05 Destructuring Assignment to Pass an Object

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54, 
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function() {

    return function half({ max, min}) {
        return (max + min) / 2.0; 
    };
})();
console.log(stats);
console.log(half(stats));



Use Destructuring Assignment to Pass an Object as a Function's Parameters
In some cases, you can destructure the object in a function argument itself.

Consider the code below:

const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}
This effectively destructures the object sent into the function. This can also be done in-place:

const profileUpdate = ({ name, age, nationality, location }) => {

}
When profileData is passed to the above function, the values are destructured from the function parameter for use within the function.




*/

/* 3:03:40 Destructuring Assignment with Rest Operator to Reassign Array

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    
    const [ , ,  ...arr] = list; // no do anything to 1 and 2, and add the rest to the variable arr; if we put [ a, b,  ...arr], then it'll be  [a,b,3,4,5,6,7,8,9,10];

    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.

The result is similar to Array.prototype.slice(), as shown below:

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
The console would display the values 1, 2 and [3, 4, 5, 7].

Variables a and b take the first and second values from the array. After that, because of the rest parameter's presence, arr gets the rest of the values in the form of an array. The rest element only works correctly as the last variable in the list. As in, you cannot use the rest parameter to catch a subarray that leaves out the last element of the original array.

*/


/* 3:01:55 Destructuring Assignment: Arrays

const [z, x, , y] = [1, 2, 3, 4, 5, 6]; // z & x are assigned to the 1st two numbers of the array; the assignment goes in order; y is asdigned to 4

let a = 8, b = 6;
(() => {
    "use strict";
    [a, b] = [b, a]
})();
console.log(a);
console.log(b);

Use Destructuring Assignment to Assign Variables from Arrays
ES6 makes destructuring arrays as easy as destructuring objects.

One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.

Destructuring an array lets us do exactly that:

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
The console will display the values of a and b as 1, 2.

The variable a is assigned the first value of the array, and b is assigned the second value of the array. We can also access the value at any index in an array with destructuring by using commas to reach the desired index:

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
The console will display the values of a, b, and c as 1, 2, 5.



*/


/* 3:00:18 Destructuring Assignment: Nested Objects

const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {

    const { tomorrow: {max : maxOfTmrw }} = forecast;
    return maxOfTmrw; 
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));

*/


/* 2:57:18 Destructuring Assignment: Objects

neatly assigning the values taken directly from an object to a variable

//old way of assigning
var voxel = {x: 3.6, y: 7.4, z: 6.54};

var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

const { x : a, y : b, z : c } = voxel; //e.g. copy the value of x to a

console.log(a, b, c);

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";

    const { tomorrow : tempOfTomorrrow } = avgTemperatures; // get the tomorrow and assign it the tempOfTomorrow

    return tempOfTomorrrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));

//solution to the task on fCC

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  const {today, tomorrow} = HIGH_TEMPERATURES;
  
  // Only change code above this line



*/

/* 

function descendingOrder(n){
  
    var digits = n.toString().split('');
    var realDigits = digits.map(Number);
    const compareFn = (a, b) => a > b ? -1 : 0;
    var x = realDigits.sort(compareFn).join('');
    return x;
  }
  
  console.log(descendingOrder(589789324798472));

  var a = 5764435365;
  var b = a.split('');
  console.log(a);
  console.log(b);

/* function descendingOrder(n){
    var x;
    if (n >= 0) {
        var digits = n.toString().split('');
        var realDigits = digits.map(Number);
        const compareFn = (a, b) => a > b ? -1 : 0;
        x = realDigits.sort(compareFn).join('');
        }
        return x;
      }

  console.log(descendingOrder(0))
  console.log(descendingOrder(1))
  console.log(descendingOrder(111))
  console.log(descendingOrder(15))
  console.log(descendingOrder(1021))
  console.log(descendingOrder(123456789))


*/



/* 2:55:31 Spread Operator (three dots ...; it extend an already existing operators or spreads out an array)

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
    arr2 = [...arr1]; // здесь происходит распространение элементов arr1 на массив arr2, а не переназначение, как в случае с arr2 = arr1
    arr1[0] = 'potato'
})();
console.log(arr2);
console.log(arr1)

*/


/* 2:54:00 Rest Operator (...)

const sum1 = (function() {
    return function sum(x, y, z) {
        const args = [x, y, z];
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum1(1, 2, 3));

// ... - rest operator

const sum2 = (function() {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();

console.log(sum2(1, 2, 3, 4, 6));


*/

/* 2:53:04 Default Parameters

параметры по умолчанию действуют тогда, когда аргументы не указаны

const increment = (function() {
    return function increment(number, value = 1) { // если не передать значение value при вызове функции, то будет браться это значение 
        return number + value;
    };
}) ();
console.log(increment(5, 2));
console.log(increment(5));


*/



/* 2:49:27 Higher Order Arrow Functions

succinct - краткий

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

*/



/* 2:28:24 Arrow Functions with Parameters

var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));

const myConcat = (arr1, arr2) => 
     arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

*/


/* 2:47:17 Arrow Functions

var magic = function() {
    return new Date();
};

const magic = () => new Date();

console.log(magic);


*/


/* 2:44:52 Prevent Object Mutation

function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 99;
   } catch (ex) {
    console.log(ex);
   }
   return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

console.log(PI);





*/



/* 2:43:40 Mutate an Array Declared with const

const s = [5, 7, 2];

function editInPlace() {
    "use strict";
    
    // s = [2, 5, 7];
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}

editInPlace();

console.log(s)

*/

/* 2:41:32 const Keyword

const нельзя переприсвоить
лучше не использовать var

использовании const часто переменную (?!) декларируют БОЛЬШИМИ БУКВАМИ, чтобы не путать

function printManyTimes(str) {
    "use strict";

    const SENTENCE = str + " is cool!"; 

    for (let i = 0; i < str.length; i +=2) {
        console.log(SENTENCE);
    }
}

printManyTimes("freeCodeCamp");


*/



/* 2:39:02 var vs let scopes

var - глобальная декларация; если внутри функции - локальная
let - ограничивается инструкцией и выражением блока, в котором она задекларирована 

Block scope i is:  block scope
Function scope i is:  function scope

function checkScope() {
    "use strict";

    let  i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}

checkScope();

function checkScope() {
    "use strict";

    let  i = "function scope";
    if (true) {
       let  i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}

checkScope();

// Block scope i is:  block scope
// Function scope i is:  block scope


*/

/* 2:36:57 var vs let
let не позволяет декларировать переменную дважды

ECMAScript 5 (ES5). Он добавил новые возможности в язык и изменил некоторые 
из существующих. Чтобы устаревший код работал, как и раньше, по умолчанию подобные изменения не применяются. 
Поэтому нам нужно явно их активировать с помощью специальной директивы: "use strict".

Директива выглядит как строка: "use strict" или 'use strict'. Когда она находится в начале скрипта, весь сценарий работает в «современном» режиме.

Например:

"use strict";

// этот код работает в современном режиме
...
Позже мы изучим функции (способ группировки команд). 
Забегая вперёд, заметим, что вместо всего скрипта "use strict" можно поставить 
в начале большинства видов функций. Это позволяет включить строгий режим 
только в конкретной функции. 
Но обычно люди используют его для всего файла.

let catName = "Quincy";
let quote;

catName = "Beau"; // let не ставится, и тогда переменной будет присвоено новое значение

function catTalk() {
    "use strict";
catName = "Oliver";
return quote = catName + " says Meow!";

}

console.log(catTalk());


*/




/* Рекурсия

function countdown(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countdown(n - 1);
      countArray.unshift(n);
      return countArray;
    }
  }
  console.log(countdown(5));

  https://youtu.be/48Zhbgq2jDE

  function rangeOfNumbers(startNum, endNum) {
    if (startNum == endNum) {
        return [startNum];
    } else {
        const myRange = rangeOfNumbers(startNum, endNum - 1);
        myRange.push(endNum);
        return myRange;
        }
      };


 console.log(rangeOfNumbers(5, 11));

*/


/* 2:34:57 Multiple Ternary Operators

function checkSign(num) {

    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";

}

console.log(checkSign(0));

*/

// condition ? statement-if-true : statement-if-false;



/* 2:33:29 Ternary Operator

Условный (тернарный) оператор - единственный оператор в JavaScript, принимающий три операнда: условие, за которым следует знак вопроса (?), затем выражение, которое выполняется, если условие истинно, сопровождается двоеточием (:), и, наконец, выражение, которое выполняется, если условие ложно. Он часто используется в качестве укороченного варианта условного оператора if.

код внизу можно заменить на код с использованием тернарного оператора

function checkEqual(a, b) {
    if(a === b) {
        return true;
    }
    else {
        return false;
    }
}

console.log(checkEqual(1, 2));

function checkEqual(a, b) {
    return a === b ? true : false;

    // в этом примере можно просто написать return a === b;

    }

console.log(checkEqual(2, 2));

*/


/* 2:32:36 parseInt Function with a Radix НЕ ОЧЕНЬ ПОНЯТНО, НАДО ИЗУЧИТЬ ПОДРОБНЕЕ

The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

https://math.fandom.com/ru/wiki/%D0%A1%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0_%D1%81%D1%87%D0%B8%D1%81%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F

function convertToInteger(str) {

    return parseInt(str, 2)


}

console.log(convertToInteger("10011"));




*/


/* 2:31:46 parseInt Function

function convertToInteger(str) {

    return parseInt(str);

}

console.log(convertToInteger("56"));



*/


/* 2:30:21 Random Whole Numbers within a Range

function ourRandomRange(ourMin, ourMax) {

    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9); 

function randomRange(myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var myRandom = randomRange(5, 15);
// Math.floor(Math.random() * (15 - 5 + 1)) + 5 = округл(ранд. дробное число от 0 до 1 * 11) + 5 

console.log(myRandom);



*/


/* 2:28:54 Random Whole Numbers

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

    return Math.floor(Math.random() * 10);

}

console.log(randomWholeNum());

function randomWholeNum () {

    return Math.floor(Math.random() * 100);
}

console.log(randomWholeNum());



*/

/* 2:28:18 Random Fractions (Math.random)

function randomFraction() {

    return Math.random();
}

console.log(randomFraction());

*/

/* recursion https://youtu.be/Q0alTGQ-lXk 

function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }

  console.log(multiply([11, 21, 31], 2));

  */

/* const countToTen = (num = 1) => {
    while (num <= 10) {
        console.log(num);
        num++;
    }
}

countToTen();

/* 2:24:12 Profile Lookup

var contacts = [ 
    {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"] 
},
{
"firstName": "Harry",
"lastName": "Potter", "number": "0994372684",
"likes": ["Hogwarts", "Magic", "Hagrid"] 
},
{
"firstName": "Sherlock",
"lastName": "Holmes", "number": "0487345643", "likes": ["Intriguing Cases", "Violin"] 
},
{
"firstName": "Kristian",
"lastName": "Vos",
"number": "unknown",
"likes": ["JavaScript", "Gaming", "Foxes"]
}
];

function lookUpProfile(name, prop) {
    for (var i=0; i<contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop]|| "No such property";
        }
    }
    return "No such contact";
}

var data = lookUpProfile("Sherlock", "hello");

document.write(data);


*/



/* 2:22:45 Do...While Loops

the while loop first checks the condition whereas the do-while loop will always run at least once before checking the condition

The next type of loop you will learn is called a do...while loop. It is called a do...while loop because it will first do one pass of the code inside the loop no matter what, and then continue to run the loop while the specified condition evaluates to true.

const ourArray = [];
let i = 0;

do {
  ourArray.push(i);
  i++;
} while (i < 5);
The example above behaves similar to other types of loops, and the resulting array will look like [0, 1, 2, 3, 4]. However, what makes the do...while different from other loops is how it behaves when the condition fails on the first check. Let's see this in action. Here is a regular while loop that will run the code in the loop as long as i < 5:

const ourArray = []; 
let i = 5;

while (i < 5) {
  ourArray.push(i);
  i++;
}
In this example, we initialize the value of ourArray to an empty array and the value of i to 5. When we execute the while loop, the condition evaluates to false because i is not less than 5, so we do not execute the code inside the loop. The result is that ourArray will end up with no values added to it, and it will still look like [] when all of the code in the example above has completed running. Now, take a look at a do...while loop:

const ourArray = []; 
let i = 5;

do {
  ourArray.push(i);
  i++;
} while (i < 5);
In this case, we initialize the value of i to 5, just like we did with the while loop. When we get to the next line, there is no condition to evaluate, so we go to the code inside the curly braces and execute it. We will add a single element to the array and then increment i before we get to the condition check. When we finally evaluate the condition i < 5 on the last line, we see that i is now 6, which fails the conditional check, so we exit the loop and are done. At the end of the above example, the value of ourArray is [5]. Essentially, a do...while loop ensures that the code inside the loop will run at least once. Let's try getting a do...while loop to work by pushing values to an array.

var myArray = [];
var i = 10;

do { 
    myArray.push(i);
    i++;
} while (i < 5) 

document.write(i, myArray);



*/



/* 2:19:43 Nesting For Loops

function multiplyAll(arr) {
    var product = 1;

    for (var i = 0; i < arr.length; i++) {
        for (var j=0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }    

    return product;
}

var product = multiplyAll([[1,2], [3,4], [5,6,7]]);

document.write(product);

*/


/* 2:17:08 Iterate Through an Array with a For Loop

var ourArray = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArray.length; i++) {
    ourTotal += ourArray[i];
}

document.write(ourTotal);

var myArr = [2, 3, 4, 5, 6];
var myTotal = 0;

for (var i=0; i < myArr.length; i++) {
    myTotal += myArr[i];
}

document.write(myTotal);

*/


/* 2:15:28 Count Backwards With a For Loop

var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
    ourArray.push(i);
}

document.write(ourArray);

var myArray = [];

for (var i = 1; i < 10; i += 2) {
    myArray.push(i);
}

document.write(' ' + myArray);




*/



/* 2:13:56 Odd Numbers With a For Loop

var ourArray = [];

for (var i = 0; i < 10; i += 2) {
    ourArray.push(i);
}

document.write(ourArray);

var myArray = [];

for (var i = 1; i < 10; i += 2) {
    myArray.push(i);
}

document.write(' ' + myArray);


*/


/* 2:11:35 For Loops

var ourArray = [];

for (var i = 0; i < 5; i++) {
    ourArray.push(i);
}

var myArray = [];

for (var i = 1; i < 6; i++) {
    myArray.push(i);
}

document.write(myArray);

*/


/* 2:10:15 Iterate with While Loops

var myArray = [];

var i = 0;
while(i < 5) {
    myArray.push(i);
    i++;
}
document.write(myArray);



*/



/* 2:03:06 Record Collection

var collection = {
    "2548": {
      "album": 'Slippery When Wet',
      "artist": 'Bon Jovi',
      "tracks": [
        'Let It Rock', 
        'You Give Love a Bad Name'
        ]
    },
    "2468": {
      "album": '1999',
      "artist": 'Prince',
      "tracks": [
        '1999', 
        'Little Red Corvette'
        ]
    },
    1245: {
      "artist": 'Robert Palmer',
      "tracks": []
    },
    5439: {
      "album": 'ABBA Gold'
    }
  };

  var collectionCopy = JSON.parse(JSON.stringify(collection)); // для создания копии коллекции

  function updateRecords(id, prop, value) { // если для value ничего не указать, то это свойство будет удалено; при указании value для свойства со стройкой в значении (а не массивом), строка заменяется; если после свойства идет массив, то новое value добавляется в этот массив
    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }


    return collection;
  }

  console.log(collectionCopy);

/*  ВЕРНУТЬСЯ!!!!

const recordCollection = {
  2548: {
    "album": 'Slippery When Wet',
    "artist": 'Bon Jovi',
    "tracks": ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

*/

/* JSON

const str = `{
    "data" : 
[ 
    {
        "shoppingCart": "ABC123",
        "items": ["123", "456"] 
    }
]
}`;

const obj = {
    data: 
    [
        {
            shoppingCart : 'ABC123',
            'items': ['123', '456'] 
        }
    ]
};

//console.log(obj.data[0].shoppingCart); //есть доступ
//console.log(str.data[0].shoppingCart); // нет доступа
console.log(JSON.parse(str).data[0].items);



Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, for string interpolation with embedded expressions, and for special constructs called tagged templates; при копировании в код данных при помощи JSON они помещаются внутри `` и воспринимаются как строка, и с ней можно производить только действия для строк 

*/



/* 2:01:53 Accessing Nested Arrays

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];


var secondTree = myPlants[1].list[1];
document.write(secondTree);

var favoriteBands = [
    {
        style: "heavy metal",
        list: [
            "Iron Maiden",
            "Judas Priest",
            "Motorhead"
        ]
    },
    {
        style: "punk rock",
        list: [
            "Sum 41",
            "Blink 182",
            "The Clash"
        ]
    }
]

var secondPunkBand = favoriteBands[1].list[1];

document.write(secondPunkBand);


*/

/* 2:01:00 Nested Objects

var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps", // тут есть пробел, поэтому для доступа к этому элементу нужно использовать скобочную запись []
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];

document.write(gloveBoxContents);

*/

/* 1:59:15 Manipulating Complex Objects
In JS flexible objects are used to store data

var myMusic = [ // квадратные скобки; массив + объект
    {  // фигурные скобки
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
},

{
    "artist": "Beau Carnes",
    "title": "Cereal Man",
    "release_year": 2003,
    "formats": [
        "YouTube video"
    ]
}
];



*/



/* 1:57:43 Testing Objects for Properties

Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.

Example

const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
The first hasOwnProperty returns true, while the second returns false.

var myObj = {
    "gift": "pony", // видимо, кавычки для первого элемента не имеют значения, работает в любом случае
    pet: "kitten",
    bed: "sleigh",
};

function checkObj(checkProp) {

   if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
   } else {
    return "Not Found"
   }
}

document.write(checkObj("gift"));

*/



/* 1:55:54 Objects for Lookups

Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to lookup values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range.

Here is an example of a simple reverse alphabet lookup:

const alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};

const thirdLetter = alpha[2];
const lastLetter = alpha[24];

const value = 2;
const valueLookup = alpha[value];
thirdLetter is the string Y, lastLetter is the string C, and valueLookup is the string Y.

function phoneticLookup(val) {
    var result = "";

    switch(val) {
        case "alpha":
            result = "Adams";
            break;
        case "bravo":
            result = "Boston";
            break;
        case "charlie":
            result = "Chicago";
            break;
        case "delta":
            result = "Denver";
            break;
        case "echo":
            result = "Easy";
            break;
        case "foxtrot":
            result = "Frank";
            break;
    }
    return result;
}

Можно переделать в объект:

function phoneticLookup(val) {
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "frank"
    };
    result = lookup[val];
    return result;
}

document.write(phoneticLookup("foxtrot"));


*/

/* 1:55:19 Delete Properties from Object

We can also delete properties from objects like this:

delete ourDog.bark;
Example:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;
After the last line shown above, ourDog looks like:

{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
};

delete ourDog.bark;

var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof!"
}
delete myDog.tails;

document.write(ourDog.tails + ' ');
document.write(myDog.tails);

*/


/* 1:54:30 Add New Properties to Object

добавить новые свойства объекту можно путем точечной или скобочной записи 

You can add new properties to existing JavaScript objects the same way you would modify them.

Here's how we would add a bark property to ourDog:

ourDog.bark = "bow-wow";
or

ourDog["bark"] = "bow-wow";
Now when we evaluate ourDog.bark, we'll get his bark, bow-wow.

Example:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]

}
myDog['bark'] = "woof!";

document.write(ourDog.bark + ' ');
document.write(myDog.bark);

*/



/* 1:53:34 Updating Object Properties

After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable. You can use either dot or bracket notation to update.

For example, let's look at ourDog:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
Since he's a particularly happy dog, let's change his name to the string Happy Camper. Here's how we update his object's name property: ourDog.name = "Happy Camper"; or ourDog["name"] = "Happy Camper"; Now when we evaluate ourDog.name, instead of getting Camper, we'll get his new name, Happy Camper.

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

var myDog = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "friends": ["freeCodeCamp Campers"]

}
myDog.name = "Happy Coder";

document.write(ourDog.name + ' ');
document.write(myDog.name);

*/



/* 1:52:47 Accessing Object Properties with Variables

Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.

Here is an example of using a variable to access a property:

const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);
The string Doberman would be displayed in the console.

Another way you can use this concept is when the property's name is collected dynamically during the program execution, as follows:

const someObj = {
  propName: "John"
};

function propPrefix(str) {
  const s = "prop";
  return s + str;
}

const someProp = propPrefix("Name");
console.log(someObj[someProp]);
someProp would have a value of the string propName, and the string John would be displayed in the console.

Note that we do not use quotes around the variable name when using it to access the property because we are using the value of the variable, not the name.

var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas",
};

var playerNumber = 16;
var player = testObj[playerNumber];

document.write(player);


var testObject = {
    26: "Terry", // обычная запятая, а не точка с запятой
    8: "Lampard",
    1: "Cech"
}; 

var footballerNumber = 26;
var footballer = testObject[footballerNumber];

document.write(footballer);

*/



/* 1:51:33 Accessing Object Properties with Bracket Notation []

bracket notation can be used any time, but it is REQUIRED if there's space between words in a string ("an entree")

var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water",
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj['the drink'];

document.write(entreeValue);

*/


/* 1:50:46 Accessing Object Properties with Dot Notation

dot notation means to put a dot (e.g. testObj.hat)

There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.

Dot notation is what you use when you know the name of the property you're trying to access ahead of time.

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats",
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

document.write(hatValue);


*/


/* 1:49:11 Build JS Objects

objects are similar to arrays, but to access its elements we don't use indexes; object elements are placed inside curly braces; you access the data in objects through what are called properties

you can use strings and numbers as properties. You can even omit the quotes for single-word string properties.

However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

var myDog = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "friends": []

}


*/



/* 1:43:38 Counting Cards

var count = 0;

function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }

    var holdbet = "Hold";
    if (count > 0) {
        holdbet = "Bet";
    }

    return count + " " + holdbet;

}

cc(2); cc(3); cc(7); cc("K"); cc("A");
document.write(cc(4));


*/

/* 1:42:20 Return Early Pattern for Functions

When a return statement is reached, the execution of the current function stops and control returns to the calling location.

Example

function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
The above will display the string Hello in the console, and return the string World. The string byebye will never display in the console, because the function exits at the return statement.

function abTest(a, b) {

    if (a < 0 || b < 0) {
        return undefined;
    }



    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

document.write(abTest(-2,2)); 


*/


/* 1:41:11 Returning Boolean Values from Functions

function isLess(a, b) {
    return (a < b); // не нужно прописывать if
}
document.write(isLess(100, 15));

function isGreater(a, b) {
    return (a > b);
}
document.write(isGreater(100, 15));

*/






/* 1:39:20 Replacing If Else Chains with Switch

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);

function chainToSwitch(val) {
    var answer = '';
    switch(val) {

    case 'bob':
        answer = 'Marley';
        break;
    case 42:
        answer = 'The Answer';
        break;
        
    case 1:
        answer = 'There is no #1';
        break;
        
    case 99:
        answer = 'Missed me by this much!';
        break;
        
    case 7:
        answer = 'Ate Nine';
        break;

    }    

    return answer;
}


*/


/* 1:37:23 Multiple Identical Options in Switch Statements

function sequentialSizes(val) {
    var answer = '';
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}
document.write(sequentialSizes(5));

*/


/* 1:35:46 Default Option in Switch Statements

you can add the default statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain.

A default statement should be the last case.

function switchOfStuff(val) {
    var answer = '';
    switch(val) {
        case 'a':
            answer = 'apple';
            break;
        case 'b':
            answer = 'pear';
            break;          
        case 'c':
            answer = 'banana';
            break;
        case 'd':
            answer = 'orange';
            break;

        default:
            answer = 'stuff';
            break;
    }
    return answer;
}

document.write(switchOfStuff('c'))

*/

/* 1:32:15 Switch Statements

case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed.

function spanishWords(val) {
    var word = '';
    switch(val) {
        case 1:
            word = 'madre';
            break;
        case 2:  
            word = 'padre';
            break;  
        case 3:  
            word = 'gato';
            break;  
        case 4:  
            word = 'perro';
            break;  
    }
    return word;
}
document.write(spanishWords(1))

function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:  // if val equals 1; it uses "===" 
            answer = "alpha";
            break;
        case 2: // if val equals 2; it uses "===" 
            answer = "beta";
            break; // if we don't put the "break" statement, it'll go through the next case statement automatically
        case 3:  
            answer = "gamma";
            break;
        case 4:  
            answer = "delta";
            break;
    }
    return answer;
}
document.write(caseInSwitch(4));




*/

/* 


*/




/* 1:27:45 Golf Code

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes <= par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else if (strokes >= par + 3) {
        return names[6];
    }
}

document.write(golfScore(5, 20));


*/

/* 1:24:45 Chaining If Else Statements

function testSize(num) {
    if (num < 5) {
        return "tiny";
    }
    else if (num < 10) {
        return "small";
    } else if (num < 15) {
        return "medium";
    }
    else if (num < 20) {
        return "large";
    }
    else {
        return "huge";
    }
}

document.write(testSize(7) + "<br>");
document.write(testSize(71) + "<br>");
document.write(testSize(13));


*/

/* 1:23:30 Logical Order in If Else Statements

function testElseIf(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than 10";
    }
}

alert(testElseIf(50));
alert(testElseIf(5));
alert(testElseIf(3));

*/



/* 1:22:27 Else If Statements

function testElse(val) {

    if(val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }

}

alert(testElse(70));


}


*/



/* 1:21:37 Else Statements

function testELse (val) {
    var result = "" // зачем тут равно и кавычки?;

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }

    return result;
}

alert(testELse(4));


function testElse (val) {

    var outcome = "";

    if (val > 11) {
        outcome = "Cool";
    }

    else {
        outcome = "Uncool";
    }

    return outcome;

}

alert(testElse(4));

*/

/* 1:20:42 Comparisons with the Logical Or Operator

function testLogicalOr(val) {

    if (val < 10 || val > 20) {
        return "Outside";
    }

    return "Inside";
}

alert(testLogicalOr(5));
alert(testLogicalOr(15));
alert(testLogicalOr(50));

*/ 

/* 1:19:17 And Operator 

function testLogicalAnd(val) {

    if (val <= 50 && val >= 25) {
      return "Yes";        
    }

    return "No";
}

alert(testLogicalAnd(10));


*/

/* 1:18:44 Less Than Or Equal To Operator

function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller Than or Equal to 12";
    }

    if (val <= 24) {
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

console.log(testLessOrEqual(22));


*/

/* 1:18:09 Less Than Operator

function testLessThan(val) {
    if (val < 100) {
        return "Under 100";
    }

    return "100 or Over";
}

console.log(testLessThan(35));

*/

/* 1:17:40 Comparison with the Greater Than Or Equal To Operator

function testGreaterThanOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }

    if (val >= 10) {
        return "10 or Over";
    }

    return "Less than 10";
}

console.log(testGreaterThanOrEqual(10));
*/

/* 1:17:06 Greater Than Operator

function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }

    if (val > 10) {
        return "Over 10";
    }

    return "10 or Under";
}

console.log(testGreaterThan(100));

*/

/* 1:16:20 Comparison with the Strict Inequality Operator

function testStrictNotEqual(val) {

    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testStrictNotEqual('17'))

*/

/* 1:15:42 Comparison with the Inequality Operator

function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testNotEqual(99))

*/ 

/* 1:14:44 Practice comparing different values

function compareEquality(a, b) {

    if (a == b) {
        return "Equal";
    }
    return "Not Equal";
}

function compareEquality(a, b) {

    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(compareEquality(10, "10"));



*/


/* 1:13:17 Strict Equality Operator

the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

Examples

3 ===  3  // true
3 === '3' // false

function testStrict(val) {
    if (val === '10') {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testStrict(10));

function testStrict(val) {
    if (val === 10) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testStrict(10));



*/

/* 1:11:51 Equality Operator

 In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. This is known as Type Coercion. Once it does, however, it can compare terms as follows:

1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true

function testEqual(val) { 
if (val == 12) {
    return "Equal"; 
    }
    return "Not Equal";
}

console.log(testEqual(10));

*/



/* 1:09:24 Use Conditional Logic with If Statements 

function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}

console.log(ourTrueOrFalse(5 > 4));

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";

}

console.log(trueOrFalse(true))

*/

/* Boolean Values 1:08:42

function welcomeToBooleans() {
    return false;
}

or 

function welcomeToBooleans() {
    return true;
}

*/


/* Баловство с shift, push, unshift

let arr = [1,2,3,4,5]; 
let shiftedValue =arr.shift();
console.log(shiftedValue)

arr.push(111);


arr.unshift(555);

console.log(arr)

*/


/* Stand in Line 1:05:52
you can add an item to the array that's passed in and it's going to return the 1st item on the list
"JSON.stringify" turns the array into a string that can easily prited out to the screen

function nextInLine(arr, item) {
    
    arr.push(item);  
    return arr.shift(); 
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

var nextArr = [5,6,7,8,9]

console.log("Before: " + JSON.stringify(nextArr));
console.log(nextInLine(nextArr, 10));
console.log("After: " + JSON.stringify(nextArr));

*/

/* Assignment with a Returned Value 1:04:52
var changed = 0;

function change(num) {
    return (num + 5) / 3;
}

changed = change(10);


var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

processed = processArg(7);

alert(processed);

*/

/* Understanding Undefined Value returned from a Function 1:03:57
var sum = 0;
function addThree() {
    sum = sum + 3;
}

function addFive() {
     sum += 5;
}
*/

/* Return a Value from a Function with Return 1:02:42
function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(10)); - при вывозе функции в скобках пишется ее название и в след. скобках - число, с кот-м нужно произвести действие

function timesFive(num) {
    return num * 5;
}

console.log(timesFive(5));


function divideByTen(num) {
    return num / 10;
}
console.log(divideByTen(100))
*/


/* Global vs Local Scope in Functions 1:00:52 
The local variable takes precedence over the global variable. In the example below, the local variable (T-Shirt) is displayed first, and then - the global variable (sweater)

var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "sweater";

    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);

*/

/* Local Scope and Function 59:31 - переменная, определенная внутри с функции через var доступна только внутри этой функции
function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();

*/



/* Global Scope 55:56
var myGlobal = 10;

function fun1() {
    oopsGlobal = 5;
    // нет var, поэтому переменная им. глобал. охват; если поставить var, то охват будет локальный
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }

    if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
}
document.write(output);

}

*/


/* SoloLearnStuff




*/