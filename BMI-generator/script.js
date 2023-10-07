const form = document.querySelector('form');
// console.log(form);
form.addEventListener('submit',function(event){
    event.preventDefault();

    const weight = parseInt(document.querySelector('#weight').value);
    const height = parseInt(document.querySelector('#height').value);
    const result = document.querySelector('#result');
    const feedback = document.querySelector('#feedback');

    if(height < 0 || height == '' || isNaN(height)){
        result.innerHTML = "please give a valid height..!";
    }
    else if(weight < 0 || weight == '' || isNaN(weight)){
        result.innerHTML = "please give a valid weight..!";
    }
    else{
        const ans = weight / ((height*height)/10000);
        result.innerHTML = `${ans.toFixed(2)}`;
        if(ans<18.6){
            feedback.innerHTML = "You are under weight";
        }
        else if(ans>=18.6 && ans<=24.9){
            feedback.innerHTML = "Your weight is normal";
        }
        else{
            feedback.innerHTML = "Your are over weight";
        }
    }

});