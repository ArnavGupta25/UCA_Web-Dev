//promise
//Promise is an object created using Promise() constructor function and have 2 properties
//  .state
// .value

// state - Possible value
//  - pending
//  - fulfilled
//  -  rejected

// value - Possible value
//  - undefined
//  - return value or error

function promiseExecuter(resolve,reject){
    setTimeout(() => {
        resolve({response: "responsevalue"})
        // reject({response: "responsevalue"})
        console.log("Inside promise executer function")
    }, 10000)
}

var promise1 = new Promise(promiseExecuter);
// var promise2 = new Promise(promiseExecuter);

// console.log(promise1 === promise2); // will return false

let responseValue;
var promise1 = new Promise(promiseExecuter);
promise1.then((someValue) => {
    responseValue=someValue
})
// promise1.catch((someValue) => {
//     responseValue=someValue
// })