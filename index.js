/*1) 'add()' is a valid function
2) 'subtract()' is a valid function
3) 'multiply()' is a valid function
4) 'divide()' is a valid function
5) add(a, b) adds two numbers and returns the result
6) subtract(a, b) subtracts b from a and returns the result
7) multiply(a, b) multiplies two numbers and returns the result
8) divide(a, b) divides a by b and returns the result
9) increment(n) increments n and returns the result
10) decrement(n) decrements n and returns the result

makeInt(n)
11) parses n as an integer and returns the parsed integer
12) assumes base 10
13) returns NaN as appropriate*/
  function add(){
  1 + 80;
  }console.log(add)

   function add(){
  1 + 80;
  }console.log(add)

  function subtract(){
  60 - 40;
  }console.log(subtract)
  function multiply(){
  2 * 3.4;
  }console.log(multiply)
  function divide(){
  5.0 / 2.5;
  }console.log(divide)

  function add(num1 , num2){
    let res = num1 + num2;
    return res
  }
  function subtract(num1 , num2){
    let res = num1 - num2;
    return res
  }
  function multiply(a , b){
    multiply = a * b;
    return multiply
  }
  function divide(a, b){
    divide = a/ b;
    return divide
  }

function increment(n){
    increment = ++n;
    return increment
}
function decrement(n){
    decrement = --n
    return decrement
}

function makeInt(n){
n = parseInt(n);
n = parseInt(n , 10);
console.log(parseInt(n, 10))
}
function makeInt(n){
n = parseInt("2");
console.log(parseInt("2"))
}
function preserveDecimal(n){
n = parseFloat("2.999")
console.log(parseFloat("2.222"))
} 

function makeInt(n){
n = parseInt("nonsense!", 10);
console.log(parseInt("nonsense!", 10))
}

function preserveDecimal(n){
    n = parseInt("nonsense!", 10);
    console.log(parseInt("nonsense!", 10))
    }
