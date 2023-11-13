const pixelField = document.querySelector('#px');
const remField = document.querySelector('#rem');
const convertBtn = document.querySelector('#convertBtn');

convertBtn.addEventListener('click', function(){
    const pixelValue = pixelField.value;
    console.log(pixelValue);
    pxTorem(pixelValue);
    // pixelField.value = '';
})

const pxTorem = (px) => {
    const toRem = px / 16;
    console.log(toRem);
    remField.innerHTML = toRem;
}