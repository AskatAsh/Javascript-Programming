function sumNumberValues(obj) {
    const values = Object.values(obj);
    // return typeof(values[0]);
    let sum = 0;
    for(let val of values){
        if(typeof(val) === 'number'){
            sum += val;
        }
    }
    return sum;
}

const data = {
    apples: 5,
    bananas: 8,
    oranges: 'twelve',
    grapes: 4,
};

const total = sumNumberValues(data);
console.log(total);
