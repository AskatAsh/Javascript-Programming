const promiseOne = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("This is inside the created promise");
        resolve();
    }, 1000);
})

promiseOne.then(function(){
    console.log("promise called or consumed");
})

const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Async task 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({user: "Askat", email: "askat@example.com"});
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        const error = false;
        if(!error){
            resolve({username: "Askat", password: "123"});
        } else{
            reject("Error: Something went wrong!");
        }
    }, 1000);
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected."));

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        const error = true;
        if(!error){
            resolve({language: "JavaScript", version: "ES6"});
        } else{
            reject("Error: JS went wrong!");
        }
    }, 1000);
});

async function consumePromiseFive(){
    const response = await promiseFive;
    console.log(response);
}
consumePromiseFive();