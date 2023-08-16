const DELAY = 1000 // What will happen If we set this to 0, will it be predictable?

console.log('Start exercise 2 - Immediate')

setTimeout(() => { console.log('Timeout 1') }, DELAY)

setImmediate(() => { console.log('Immediate 1') })

setTimeout(() => {
    setTimeout(() => { console.log('Timeout 3') }, DELAY)
    setImmediate(() => { console.log('Immediate 2') })
    console.log('Timeout 2') 
}, DELAY)

console.log('End exercise 2 - Immediate')