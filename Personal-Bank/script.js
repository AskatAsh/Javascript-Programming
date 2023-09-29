const loginBtn = document.getElementById('loginButton');
// console.log(loginBtn);
loginBtn.addEventListener('click', function(event){
    const userEmail = document.getElementById('userEmail');
    // console.log(userEmail.value);
    const email = userEmail.value;

    const userPassword = document.getElementById('userPassword');
    // console.log(userPassword.value);
    const password = userPassword.value;

    if(email === 'ash98@gmail.com' && password === 'forgotten'){
        alert('Welcome to Your Personal Bank');
    }
    else{
        const invalid = document.getElementById('invalid');
        // console.log(invalid);
        invalid.innerText = 'The email or password you have given is incorrect!';

    }
});