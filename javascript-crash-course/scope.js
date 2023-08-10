// Global Scope
var specialVariable = 13

function printVariable() {
    console.log("Example of Global Scope: ", specialVariable)
}

printVariable()


// Local Scope
var specialVariable = 13

function printVariable() {
    var specialVariable = 12
    console.log("Example of local scope: ", specialVariable)
}

printVariable()
console.log("Using global scope: ", specialVariable)
