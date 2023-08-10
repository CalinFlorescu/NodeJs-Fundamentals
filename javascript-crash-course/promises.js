const promise = new Promise((resolve, reject) => {
    const stringOne = "renadomString"
    const stringTwo = "randomString"
    if (stringOne === stringTwo)
        resolve(true)
    else
        reject(false)
})
 
promise.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})