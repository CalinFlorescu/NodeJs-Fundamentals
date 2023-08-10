const myPromise = () => {
    const promise = new Promise((resolve, reject) => {
        const a = "randomString"
        const b = "randomString"
        if (a === b)
        resolve("They strings have the same value")
        else 
        reject("Not quite the same")
    })
    return promise;
};
 
async function executePromise() {
    try {
        let message = await myPromise()
        console.log(message)
    } catch (error) {
        console.log("Error: " + error)
    }
}
 
executePromise()