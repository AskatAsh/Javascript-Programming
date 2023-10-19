// function to generate random color

const randomColor = function () {
    const hex = "123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * 16);
        // console.log(index);
        color += hex[index];
    }
    // console.log(color);
    return color;
}
// randomColor();

// let bgChanger;

// document.querySelector('#start').addEventListener('click', function(){
//     bgChanger = setInterval(function(){
//         document.body.style.backgroundColor = randomColor();
//     },1000)
// })
// document.querySelector('#stop').addEventListener('click', function(){
//     clearInterval(bgChanger);
// })

let bgChanger;
const startBgColor = function () {
    bgChanger = setInterval(function () {
        document.body.style.backgroundColor = randomColor();
    }, 1000)
};
const stopBgColor = function () {
    clearInterval(bgChanger);
    bgChanger = null;
};

document.querySelector('#start').addEventListener('click', startBgColor);
document.querySelector('#stop').addEventListener('click', stopBgColor);