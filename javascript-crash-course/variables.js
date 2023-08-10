// Literal way
var a = "String"
var b = 123
var c = true

var student = {
	name: "Alex",
	age: 23,
	sayMyName: function () {
		console.log("My name is ", this.name)
	}
}

// Object oriented way
var d = new String("String")
var e = new Number(123)
var f = new Boolean(true)

var secondStudent = new Object({
	name: "John",
	age: 26,
	sayMyName: function () {
		console.log("My name is ", this.name)
	}
})

// Working with objects
const student = {
	name: 'Alex',
	age: 29,
	city: 'Cluj'
}

const secondStudent = student

secondStudent.name = "Alex"

console.log(student)
// What would be the name of the first student?
// console.log(student.name)

// Destructuring
const {name, ...rest} = student
console.log(name)
console.log(rest)