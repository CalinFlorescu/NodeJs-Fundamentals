// Arithmetic Operators
let a = 1
let b = 2

// Exponential
const exp = a ** b 
// Modulus
const mod = a % b

// Assignment operations

b += 1 // b = b + 1
b *= 4 // b = b * 4

// Comparison Operators

const c = 1
const d = '1'

// Checks if the values are the same using type conversion (right operand is transformed into the left operand)
if (c == d)
	console.log('Is this working?')
// Checks if value and type are the same
if (c === d)
	console.log('This is better')

// Ternary operator
console.log(c === d ? 'This is better' : 'This is not better')