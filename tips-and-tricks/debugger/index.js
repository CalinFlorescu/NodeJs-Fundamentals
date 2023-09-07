const error = require('./triggerError')

let num = 0

debugger
num += 1
console.log('Addition of two numbers')
debugger

num *= 2
console.log('Multiplication of two numbers')
debugger

num /= 2
console.log('Division of two numbers')
debugger

error()
console.log('I am calling my function')
debugger

num -= 1
console.log('Subtraction of two numbers')
debugger