const time = document.querySelector('#time');

// let myTime = new Date();
// console.log(myTime.toLocaleTimeString());

setInterval(function () {
    let myTime = new Date();
    // console.log(myTime.toLocaleTimeString());
    time.innerHTML = myTime.toLocaleTimeString();
}, 1000)