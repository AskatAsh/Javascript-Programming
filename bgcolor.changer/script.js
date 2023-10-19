// function to generate random color

const randomColor = function(){
    const hex = "123456789ABCDEF";
    let color = "#";
    for(let i=0; i<6; i++){
        const index = Math.floor(Math.random()*16);
        // console.log(index);
        color += hex[index];
    }
    console.log(color);
}
randomColor();