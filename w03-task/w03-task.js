/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}
function addNumbers() {
   let addNumber1 = Number(document.querySelector("#add1").value);
   let addNumber2 = Number(document.querySelector("#add2").value);
    

    // Calculate the sum
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function  subtract( subtract1,  subtract2) {
    return  subtract1 -  subtract2;
}
function subtractNumbers() {
    let subtract1 = Number(document.querySelector("#subtract1").value);
    let subtract2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(subtract1, subtract2);
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);
/* Arrow Function - Multiply Numbers */
let multiply= (factor1, factor2) => factor1 * factor2;
let multiplyNumbers = () => {
    let factor1 = Number(document.querySelector("#factor1").value);
    let factor2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(factor1, factor2);
    
};
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
let divide= (divident, divisor) => divident / divisor;
let divideNumbers = () => {
    let divident = Number(document.querySelector("#dividend").value);
    let divisor = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(divident, divisor);
    
};
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
document.addEventListener("DOMContentLoaded", function () {
    let subtotalInput = document.querySelector("#subtotal");
    let membershipCheckbox = document.querySelector("#member");
    let getTotalButton = document.querySelector("#getTotal");
    let totalSpan = document.querySelector("#total");
  
    getTotalButton.addEventListener("click", function () {
      // Get the numeric value entered by the user
      let subtotalValue = parseFloat(subtotalInput.value);
  
      // Check if the membership checkbox is checked
      let isMembershipChecked = membershipCheckbox.checked;
  
      // Calculate the total due
      let totalDue = subtotalValue;
      if (isMembershipChecked) {
        totalDue *= 0.8; // Apply 20% discount
      }
  
      // Display the total due with two decimal places
      totalSpan.textContent = `Total Due: $${totalDue.toFixed(2)}`;
    });
  });

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let arrayNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];


/* Output Odds Only Array */
let odds = arrayNumbers.filter((num) => num % 2 === 1);
document.querySelector("#array").textContent = arrayNumbers.join(",");
document.querySelector("#odds").textContent = odds.join(",");
/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = arrayNumbers.filter(nnumber => nnumber % 2 ===0);

/* Output Sum of Org. Array */
//arrayNumbers.reduce((sum, number)=> sum + number)
let sum = arrayNumbers.reduce((sum, number) => {
  return sum + number;
}, 0);
document.querySelector("#sumOfArray").textContent = `${sum}`
/* Output Multiplied by 2 Array */
let number = arrayNumbers.map(( number) => number * 2 );
document.querySelector("#multiplied").textContent = number.join(",")
/* Output Sum of Multiplied by 2 Array */
let multipliedArray = arrayNumbers.map((number) => number * 2);
const sumOfMultiplied = multipliedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

document.getElementById("sumOfMultiplied").textContent = ` ${sumOfMultiplied}`;