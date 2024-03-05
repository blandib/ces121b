const num1 = 5;
const num2 = 3;
const sum = num1 + num2;
console.log(`The sum of ${num1} and ${num2} is: ${sum}`);

const num3 = 5;
const num4 = 3;
const sumM = num3 * num4;
console.log(`The product of ${num3} and ${num4} is: ${sumM}`);

const num5 = 5;
const num6 = 3;
const sumS = num5 - num6;
console.log(`The Difference of ${num5} and ${num6} is: ${sumS}`);

const str1 = 'Hello';
const str2 = 'World';
const result = str1 + ' ' + str2; // 'Hello World'

console.log(result);

let x = 5;
let y = 6;
let z = x + y; // z will be 11
console.log(z)

let myValue = 10;
myValue += 3; // Increment by 3
console.log(myValue); // Output: 13
function incrementByThree(number) {
    return number + 3;
  }
  
  let myVar = 7;
  myVar = incrementByThree(myVar);
  console.log(myVar); // Output: 10

//This code snippet filters out the values that exist in both array1 and array2
const array1 = ['cat', 'sum', 'fun', 'run'];
const array2 = ['bat', 'cat', 'dog', 'sun', 'hut', 'gut'];

const intersection = array1.filter(element => array2.includes(element));
console.log(intersection); // ['cat']

const obj1 = { name: "Alice", age: 30 };
const obj2 = { age: 30, name: "Alice" };

const areEqual = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};

console.log(areEqual(obj1, obj2)); // Result: true


let num7 = 4;
let num8 = 8;

if (num7 < num8) {
    console.log(`${num7} is less than ${num8}`);
} else if (num7 > num8) {
    console.log(`${num7} is greater than ${num8}`);
} else {
    console.log('The given numbers are equal');
}
//Comparing Primitive Values:
const value1 = 10;
const value2 = 20;

if (value1 !== value2) {
  console.log("The values are not equal.");
} else {
  console.log("The values are equal.");
}
//Comparing Strings:
const string1 = "hello";
const string2 = "world";

if (string1 !== string2) {
  console.log("The strings are not equal.");
} else {
  console.log("The strings are equal.");
}
//check to see if a value is less than 10 and greater than 0
function isBetweenZeroAndTen(value) {
  return value > 0 && value < 10;
}

// Example usage:
const inputValue = 10; 
if (isBetweenZeroAndTen(inputValue)) {
  console.log("The value is between 0 and 10.");
} else {
  console.log("The value is not within the specified range.");
}

const age = 30;
const heightInCm = 175;
const temperatureInCelsius = 25;
const population = 10;

const sumResult = age + heightInCm;
console.log("the sum of age and heighInCm is:", sumResult);

let diffResult = temperatureInCelsius - population;
console.log(diffResult);

let evenOddResult = finalResult % 2 === 0 ? 0 : 1;
let finalResult = sumResult * diffResult;
console.log(finalResult);

