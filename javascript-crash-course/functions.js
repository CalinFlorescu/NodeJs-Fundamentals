// Constructor
const multiply = new Function("x", "y", "return x * y");

// Declaration
// Hoisted to the top of the scope
function multiply(x, y) {
  return x * y
}

// Expression; the function is anonymous but assigned to a variable
const multiply = function (x, y) {
  return x * y
};

// Expression; the function has its own name
// Useful when you want to call the function recursively
const calcFib = function fib(num) {
  while (num > 0) {
    return num + fib(num - 1)
  }
  return num
};

// Arrow function
// Cleaner syntax
const multiply = (x, y) => x * y;
