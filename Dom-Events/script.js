function makeLightBlue() {
    document.body.style.backgroundColor = 'lightblue';
}

function makeLightGreen() {
    document.body.style.backgroundColor = 'lightgreen';
}

const clickToChange = document.getElementById('makeLightGreen').onclick = makeLightGreen;

const pinkButton = document.getElementById('makePink');
// console.log(pinkButton);
pinkButton.onclick = function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// javascript add event listener

const greenButton = document.getElementById('makeGreen');
console.log(greenButton);

const greenText = document.getElementById('addText');
console.log(greenText);

function addGreenText() {
    greenText.innerText = 'Green after clicked';
    greenText.style.color = 'green';
    // greenText.style.backgroundColor = 'lightgreen';
    greenText.style.border = '2px solid green';
    greenText.style.width = '150px';
    greenText.style.textAlign = 'center';
    greenText.style.padding = '20px';

}

// greenButton.onclick = addGreenText;
greenButton.addEventListener('click', addGreenText);

const bgButton = document.getElementById('bgChange');
// console.log(bgButton);

bgButton.addEventListener('click', function changeBackground() {
    bgButton.style.backgroundColor = 'darkblue';
    bgButton.style.color = 'white';
    bgButton.style.padding = '5px 10px';
    bgButton.innerText = 'Thank You!';
});

// details modal
const seeDetail = document.getElementById('detailsButton');
// console.log(seeDetail);

const detailsContainer = document.getElementById('modalContainer');
function detailsContainerStyle() {
    detailsContainer.style.width = '100%';
    detailsContainer.style.height = '100%';
    detailsContainer.style.position = 'absolute';
    detailsContainer.style.top = '0';
    detailsContainer.style.left = '0';
    detailsContainer.style.display = 'flex';
    detailsContainer.style.alignItems = 'center';
    detailsContainer.style.justifyContent = 'center';
    detailsContainer.style.backgroundColor = 'rgba(0,0,255,0.2)';
    detailsContainer.style.zIndex = '99';
}

const detailsSection = document.getElementById('details');
// console.log(detailsSection.childNodes[5].innerText);
detailsSection.style.display = 'none';

function styleDetails() {
    detailsSection.style.position = 'absolute';
    detailsSection.style.boxShadow = '0px 2px 8px rgba(0,0,0,0.5)';
    detailsSection.style.display = 'block';
    // detailsSection.style.zIndex = '99';
    detailsSection.style.backgroundColor = 'darkblue';
    detailsSection.style.borderRadius = '8px';
    detailsSection.style.textAlign = 'center';
    detailsSection.style.width = '20rem';
    detailsSection.style.color = 'white';
    detailsSection.style.padding = '50px';
    // detailsSection.style.margin = '0 auto';
    detailsSection.childNodes[5].style.padding = '12px 20px';
    detailsSection.childNodes[5].style.border = 'none';
    detailsSection.childNodes[5].style.borderRadius = '8px';
    detailsSection.childNodes[5].style.backgroundColor = 'white';
    detailsSection.childNodes[5].style.color = 'blue';
    detailsSection.childNodes[5].style.fontWeight = 'bold';
    detailsSection.childNodes[5].style.marginTop = '10px';
    // document.body.style.backgroundColor = 'rgba(0,0,0,0.8)'
    detailsContainerStyle();
}

const closeButton = document.getElementById('close');
function close() {
    detailsContainer.style.display = 'none';
}

seeDetail.addEventListener('click', styleDetails);

closeButton.addEventListener('click', close);


// login form
// const userEmail = document.getElementById('userEmail');
// console.log(userEmail.value);

const loginBtn = document.getElementById('loginButton');
loginBtn.addEventListener('click', function(){
    const userEmail = document.getElementById('userEmail');
    // console.log(userEmail.value);
    const getEmail = userEmail.value;

    const showEmail = document.getElementById('email');
    showEmail.innerText = getEmail;
    // console.log('got the connection');

    const userPassword = document.getElementById('userPassword');
    // console.log(userPassword);
    const getPassword = userPassword.value;

    const showPassword = document.getElementById('password');
    // console.log(showPassword.innerText);
    showPassword.innerText = showPassword;

});

// add comment section
