/*
    Number to String
*/

// The Number 10 is converted to string '10' and then '+' concatenates both strings   
var x = 10 + '20';
var y = '20' + 10;

console.log(x);
console.log(y);

// The Boolean value true is converted to string 'true' and then '+' concatenates both the strings
var z = true + '10';
  
console.log(z);

/*
    String to Number
*/

// The string '5' is converted to number 5 in all cases implicitly
var w = 10 - '5';
var x = 10 * '5';
var y = 10 / '5';
var z = 10 % '5';
  
console.log(w);
console.log(x);
console.log(y);
console.log(z);

/*
    Boolean to Number
*/

// The Boolean value true is
// converted to number 1 and
// then operation is performed
var x = true + 2;
  
// The Boolean value false is
// converted to number 0 and
// then operation is performed
var y = false + 2;
  
console.log(y);
console.log(x);

/*
    Equality Operator
*/

// Should output 'true' as string '10' is coerced to number 10
var x = (10 == '10');
  
// Should output 'true', as boolean true is coerced to number 1
var y = (true == 1);
  
// Should output 'false' as string 'true' is coerced to NaN which is not equal to 1 of Boolean true
var z = (true == 'true');
  
console.log(x);
console.log(y);
console.log(z);