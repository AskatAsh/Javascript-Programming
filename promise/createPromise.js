const promiseOne = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("This is inside the created promise");
        resolve();
    }, 1000);
})

promiseOne.then(function(){
    console.log("promise called or consumed");
})