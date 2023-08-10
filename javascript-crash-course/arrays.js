// Ways to create arrays
const arrOne = new Array(1, 2, 3);
const arrTwo = Array('a', 'b', 'c');
const arrThree = [1, 2, 3];

// Populating arrays
const arrFour = []
arrFour[0] = 2

// Accessing arrays
console.log(arrOne[0])

// Iterating over arrays
const arr = [1,2,3,4,5,6]

for(let i = 0; i < arr.length; i++)
	console.log(arr[i])

// JS offers dedicated functions for this

// ForEach - executes the callback function for each element of the array without modifying the array
arr.forEach(function callback(element) {
	console.log(element)
})

// Map - creates a new array populated with the results of calling a provided function on every element in the calling array.
const mapOne = arr.map(function callback(element){
	return element * 2
})

console.log(mapOne)

// Filter - creates a copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
const mapTwo = arr.filter(function callback(element){
	return element % 2 === 0
})

console.log(mapTwo)

// Reduce - executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
const sum = arr.reduce(function callback(acc, element){
	return acc + element
}, 0)

console.log(sum)