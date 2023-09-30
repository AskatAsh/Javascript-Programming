function upperName(nam){
    const myName = nam.toUpperCase();
    console.log(myName);
}
// upperName('askat');

function fullName(first, callback){
    const fullName = first + ' Askat';
    callback(fullName);
}

fullName('Abdul', upperName);