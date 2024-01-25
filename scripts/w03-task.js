/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Declaration - Addition Feature */
function add(number1, number2) {
    return number1 + number2;
  }
  
  /* Function Declaration - Addition Feature */
  function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
  }
  
  /* Add a "click" event listener for the HTML button with an ID of addNumbers */
  document.querySelector('#addNumbers').addEventListener('click', addNumbers);
  
  /* Function Expression - Subtraction Feature */
  let subtract = function(number1, number2) {
    return number1 - number2;
  };
  
  /* Function Expression - Subtraction Feature */
  let subtractNumbers = function() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
  };
  
  /* Add a "click" event listener for the HTML button with an ID of subtractNumbers */
  document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
  
  /* Arrow Functions - Multiplication Feature */
  let multiply = (number1, number2) => number1 * number2;
  
  /* Arrow Function - Multiplication Feature */
  let multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
  };
  
  /* Add a "click" event listener for the HTML button with an ID of multiplyNumbers */
  document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
  
  /* Your Choice - Division Feature */
  function divide(dividend, divisor) {
    return dividend / divisor;
  }
  
  /* Your Choice - Division Feature */
  function divideNumbers() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
  }
  
  /* Add a "click" event listener for the HTML button with an ID of divideNumbers */
  document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
  
  /* Selection Structures */
  document.querySelector('#getTotal').addEventListener('click', function() {
    let subtotal = Number(document.querySelector('#subtotal').value);
    let isMember = document.querySelector('#member').checked;
  
    if (isMember) {
      subtotal *= 0.8; // Apply 20% discount for members
    }
  
    let total = subtotal.toFixed(2);
    document.querySelector('#total').innerText = `$${total}`;
  });
  
  /* ARRAY METHODS - Functional Programming */
  /* Declare and instantiate an array variable to hold the numbers 1 through 13 */
  let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  
  /* Assign the value of the array variable to the HTML element with an ID of array */
  document.querySelector('#array').innerText = numbersArray.join(', ');
  
  /* Use the filter() array method to find all odd numbers and assign the result to the HTML element with an ID of odds */
  document.querySelector('#odds').innerText = numbersArray.filter(number => number % 2 === 1).join(', ');
  
  /* Use the filter() array method to find all even numbers and assign the result to the HTML element with an ID of evens */
  document.querySelector('#evens').innerText = numbersArray.filter(number => number % 2 === 0).join(', ');
  
  /* Use the reduce() array method to sum the array elements and assign the result to the HTML element with an ID of sumOfArray */
  document.querySelector('#sumOfArray').innerText = numbersArray.reduce((sum, number) => sum + number, 0);
  
  /* Use the map() array method to multiply each element by 2 and assign the result to the HTML element with an ID of multiplied */
  document.querySelector('#multiplied').innerText = numbersArray.map(number => number * 2).join(', ');
  
  /* Use the map() and reduce() array methods to sum the array elements after multiplying each element by two. Assign the result to the HTML element with an ID of sumOfMultiplied */
  document.querySelector('#sumOfMultiplied').innerText =
    numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);
  