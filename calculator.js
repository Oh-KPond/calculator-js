'use strict';
const prompt = require('prompt');

//start the prompt
prompt.start();

//collect two numbers (num1 and num2) and an operation
//then call the function `calculator` with the results
prompt.get(['num1','num2','operation'], calculator)

function calculator(error, result) {
  if (result.operation == 'add' || result.operation == '+') {
    const add = parseFloat(result.num1) + parseFloat(result.num2)
    console.log(`${result.num1} + ${result.num2} = ${add}`) ;

  } else if (result.operation == 'subtract' || result.operation == '-') {
    const subtract = parseFloat(result.num1) - parseFloat(result.num2)
    console.log(`${result.num1} - ${result.num2} = ${subtract}`) ;

  } else if (result.operation == 'multiply' || result.operation == '*') {
    const multiply = parseFloat(result.num1) * parseFloat(result.num2)
    console.log(`${result.num1} * ${result.num2} = ${multiply}`) ;

  } else if (result.operation == 'divide' || result.operation == '/') {
    const divide = parseFloat(result.num1) / parseFloat(result.num2)
    console.log(`${result.num1} / ${result.num2} = ${divide}`) ;

  } else {
    console.log('null');
  }
}
