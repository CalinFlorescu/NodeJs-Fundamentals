const DELAY = 1000 // What will happen If we set this to 0, will it be predictable?

console.log('Start exercise 4 - Promise')

setTimeout(() => { console.log('Timeout 1') }, DELAY)

setImmediate(() => { console.log('Immediate 1') })

setTimeout(() => {
    Promise.resolve().then(() => { console.log('Promise 2') })
    setImmediate(() => { console.log('Immediate 2') })
    console.log('Timeout 2') 
}, DELAY)

Promise.resolve().then(() => { console.log('Promise 1') })
process.nextTick(() => { console.log('Next Tick 1') })

console.log('End exercise 4 - Promise')