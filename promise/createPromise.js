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