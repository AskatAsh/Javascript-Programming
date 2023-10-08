const evenNames = (...names) => {
    let evens = [];
    for(const name of names){
        // console.log(name.length);
        if(name.length%2 === 0){
            evens.push(name);
        }
    }
    return evens;
}

const ans = evenNames("abir", "kabir", "kobi", "sabir", "jaby");
console.log(ans);