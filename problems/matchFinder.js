function matchFinder(string1, string2) {
    if(typeof(string1) === 'string' && typeof(string2) ==='string'){
        let result = string1.search(string2);
        if(result !== -1){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return 'Invalid Input';
    }
}

let matchResult = matchFinder('Peter Parker', 'pet');
console.log(matchResult);
// “Peter Parker”,“Pen”