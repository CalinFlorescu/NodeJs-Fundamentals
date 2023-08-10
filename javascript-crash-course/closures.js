function sum(a, b) {
	let extraValue = 2
	function add() {
		// Due to the closure that gets created you have access to the outer scope values defined by the other function
		return a + b + extraValue
	}

	return add()
}

console.log(sum(1,2))