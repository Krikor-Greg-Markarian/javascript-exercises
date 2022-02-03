"use strict";

// const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const largeValues = values.filter((code) => code > 5);
// console.log(largeValues);

// const numbers = largeValues;
// const multipliedValues = numbers.map((number) => number * 2);
// console.log(multipliedValues);

////////////////////////////////////////////////////////////////

// Write a function called "multiply", that takes 2 parameters, an array of numbers, and the number to multiply with.

// I should be able to use the function as shown below:

// const array1 = [1,2,4,5];
// const result1 = multiply(array1, 3)
// console.log(result1); //output: 3,6,12,15

// const array2 = [2,3,6,10];
// const result2 = multiply(array1, 5)
// console.log(result1); //output: 10,15,30,50
////////////////////////////////////////////////////////////////
// Exercise 1: Write a function sayHello, that when I call, displays "Hello World!" in the console.
// -----------------------
// Exercise 2: Write a function saySomething, that takes 1 parameter (any parameter), and displays it in the console.

// Example:
// saySomething(10452); //output 10452
// saySomething("Hey!"); //output Hey!

// Exercise 3: Write a function multiplyMe, that takes 1 parameter (number), and displays it in the console multiplied by 2.

// Example:
// multiplyMe(2); //output 4
// multiplyMe(3); //output 6

// function sayHello() {
//   console.log("Hello world!");
// }

// sayHello();
////////////////////////////////////////////

// const number = 10452;
// function saySomething(number) {
//   return number;
// }
// console.log(number);
/////////////////////////////////////////

// function multiplyMe(numbers) {
//   return numbers * 2;
// }
// console.log(multiplyMe(8));

// Exercise 4: Write a function multiplyNums, that takes 2 parameters (numbers), and displays the result of their multiplication in the console.

// function multiplyNums(num1, num2) {
//   return num1 * num2;
// }
// console.log(multiplyNums(2, 8));

// Exercise 4:
// a) Write a function multiplyNums, that takes 2 parameters (numbers), and displays the result of their multiplication in the console.
// b) Write a function divideNums, that takes 2 parameters (num1 and num2), and displays the result of their division (num1 / num2) in the console. Note however that the function should check that num2 is different than 0 before dividing.

// Example:
// divideNums(6, 2); //output: 3
// divideNums(4, 0); //output: Cannot divide by zero!

// function multiplyNums(num1, num2) {
//   return num1 * num2;
// }
// console.log(multiplyNums(4, 2));
/////////////////////////////////////////

// function divideNums(num1, num2) {
//   if (num2 !== 0) {
//     return num1 / num2;
//   } else return "Cannot divide by zero!";
// }
// console.log(divideNums(6, 2));
//////////////////////////////////////////////

// Exercise 5: Write a function logArray, that takes 1 parameter (an array of anything). The function will loop through the array, and display each element in the console.

// Example:
// logArray([1,2,3]); //Output: 1 2 3
// logArray([5, "My Name", 4, "is Greg"]); //Output: 5 My Name 4 is Greg

// const numbers = [5, "My Name", 4, "is Greg"];
// function logArray(arr) {
//   arr.forEach((item) => console.log(item));
// }

// logArray(numbers);

//////////////////////////////////////////////////////////////////
// function sum(arr) {
//   const reducer = (sum, val) => sum + val;
//   const initialValue = 0;
//   return arr.reduce(reducer, initialValue);
// }

// console.log(sum([5, 4, 6, 8]));

//////////////////////////////////////////////////////////////////

// function sumArray(arr) {
//   const numbersz = [5, 4, 7, 8];
//   const sumz = numbersz.reduce((accummulator, value) => accummulator + value);
//   return sumz;
// }
// console.log(sumArray());
////////////////////////////////////////////

// Level 2:

// Exercise 1
// a)
// Write a function called "multiply", that takes 2 parameters, an array of numbers, and the number to multiply with.

// I should be able to use the function as shown below:

// const array1 = [1,2,4,5];
// multiply(array1, 3); //output: 3,6,12,15

// const array2 = [2,3,6,10];
// multiply(array2, 5); //output: 10,15,30,50

// b)
// Modify the function in part a) so I can use the function as shown below:
// const array1 = [1,2,4,5];
// const result1 = multiply(array1, 3)
// console.log(result1); //output: 3,6,12,15

// const array2 = [2,3,6,10];
// const result2 = multiply(array2, 5)
// console.log(result1); //output: 10,15,30,50

// function multiply(array1, multiply) {
//   const answer = array1.map((number) => number * multiply);
//   console.log(answer);
// }

// multiply([1, 2, 4, 5], 3);
// multiply([2, 3, 6, 10], 5);

// function multiply(array1, multiply) {
//   const result1 = array1.map((number) => number * multiply);
//   console.log(result1);
// }

// multiply([1, 2, 4, 5], 3);
// multiply([2, 3, 6, 10], 5);
/////////////////////////////////////////////
// function sumArray() {
//   const array1 = [1, 2, 4, 5];
//   const result1 = array1.map((number) => number * 3);
//   return result1;
// }
// function sumArray1() {
//   const array11 = [6, 2, 4, 5];
//   const result11 = array11.map((number) => number * 5);
//   return result11;
// }
// console.log(sumArray());
// console.log(sumArray1());
//////////////////////////////////////////////

// function findElement(arrayOfStrings, string) {
//   const exists = arrayOfStrings.includes(string);
//   return exists
// }

// console.log(findElement(["Serge", "Roger", "Charles"], "Sharbel"));
/////////////////////////////////

// function findCount(namesArray, string) {
//   let count = 0;
//   namesArray.forEach((item) => {
//     if (item === string) {
//       count = count + 1;
//     }
//   });
//   return count;
// }

// console.log(findCount(["Serge", "Greg", "Sharbel", "Greg"], "Greg"));
// console.log(findCount(["Serge", "Greg", "Sharbel", "Greg"], "Roger"));
// console.log(findCount(["Serge", "Greg", "Sharbel", "Greg"], "Sharbel"));
////////////////////////////////////

// Exercise 3
// Write a function hasNumber that takes 2 parameters, an array of integers, and a number. The function should return true if it finds the number inside the array.

// Example:
// const myArray = [1, 4, 5, 7, 9, 16, 20];
// hasNumber(myArray, 5); //output: true
// hasNumber(myArray, 11); //output: false

// Write a function hasNumberGreaterThan that takes 2 parameters, an array of numbers, and a number. The function should return true if it finds a number inside the array that’s greater than the provided one.

// Example:
// const myArray = [1, 4, 5, 7, 9, 16, 20];
// hasNumberGreaterThan(myArray, 5); //output: true
// hasNumberGreaterThan(myArray, 11); //output: true
// hasNumberGreaterThan(myArray, 21); //output: false

// Write a function countOfGreaterNums that takes 2 parameters, an array of numbers, and a number. The function should return the amount of numbers in the array that are greater than the provided number.

// 	Example:
// const myArray = [1, 4, 5, 7, 9, 16, 20];
// countOfGreaterNums(myArray, 4); //output: 5
// countOfGreaterNums(myArray, 13); //output: 2
// countOfGreaterNums(myArray, 20); //output: 0
///////////////////////////////////////////////////////

// function hasNumber(myArray, number) {
//   const answer = myArray.includes(number);
//   return answer;
// }

// console.log(hasNumber([1, 4, 5, 7, 9, 16, 20], 1));
// console.log(hasNumber([1, 4, 5, 7, 9, 16, 20], 11));

// function hasNumberGreaterThan(myArray, numbers) {
//   let isFound = false;
//   myArray.forEach((item) => {
//     if (item > numbers) {
//       isFound = true;
//     }
//   });
//   return isFound;
// }

// console.log(hasNumberGreaterThan([1, 4, 5, 7, 9, 16, 20], 5));
// console.log(hasNumberGreaterThan([1, 4, 5, 7, 9, 16, 20], 11));
// console.log(hasNumberGreaterThan([1, 4, 5, 7, 9, 16, 20], 21));

// function hasNumberGreaterThan(myArray, string) {
//   myArray.filter(function (item) {
//     if (item > string) {
//       console.log("true");
//     } else {
//       console.log("false");
//     }
//   });
// }

// console.log(hasNumberGreaterThan([1, 4, 5, 7, 9, 16, 20], 5));
// console.log(hasNumberGreaterThan([1, 4, 5, 7, 9, 16, 20], 11));
// console.log(hasNumberGreaterThan([1, 4, 5, 7, 9, 16, 20], 21));
/////////////////////////////////////////

// function countOfGreaterNums(myArray, number) {
//   let count = 0;
//   myArray.forEach((item) => {
//     if (item > number) {
//       count = count + 1;
//     }
//   });
//   return count;
// }

// console.log(countOfGreaterNums([1, 4, 5, 7, 9, 16, 20], 4));
// console.log(countOfGreaterNums([1, 4, 5, 7, 9, 16, 20], 13));
// console.log(countOfGreaterNums([1, 4, 5, 7, 9, 16, 20], 20));
/////////////////////////////////////////////////

// function joinText(myArray) {
//   let answer = myArray.join(" ");
//   return answer;
// }

// console.log(joinText(["I", "Am", 30, "Years", "Old"]));

// function joinText(myArray, string) {
//   let answer = myArray.join(string);
//   return answer;
// }

// console.log(joinText(["I", "Am", 30, "Years", "Old"], " - "));
// console.log(joinText(["I", "Am", 30, "Years", "Old"], " "));
// console.log(joinText(["I", "Am", 30, "Years", "Old"], " ~~~ "));
//////////////////////////////////////

// function getArraySize(arraySize) {
//   const answer = arraySize.length;
//   return answer;
// }

// console.log(getArraySize([2, 3, "Serge"]));
// console.log(getArraySize([5, 6, 7, 8]));
//////////////////////////////////////////////

// function listItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }
// }
// listItems([2, "Greg", 3, "Serge"]);
//////////////////////////////////////////////////

// function listItems(array) {
//   for (let i = array.length-1; i >= 0; i--) {
//     console.log(array[i]);
//   }
// }
// listItems([2, "Greg", 3, "Serge"]);
/////////////////////////////////////////////

// function isLessThan(num1, num2) {
//   return num1 < num2;
// }
// console.log(isLessThan(5, 4));
// console.log(isLessThan(4, 5));
//////////////////////////////////////////

// function isGreaterThan(num1, num2) {
//   return num1 > num2;
// }

// console.log(isGreaterThan(10, 8));
// console.log(isGreaterThan(9, 9));
//////////////////////////////////////

function isLessThan(num1, num2, orEqual) {
  let isLess = true;
  if (num1 <= num2) {
    return isLess;
  }
}

console.log(isLessThan(4, 5, false));
console.log(isLessThan(5, 5, false));
console.log(isLessThan(5, 5, true));
