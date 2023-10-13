function findStringWithA(strings){
    const stringWithA = strings.find(string => string[0].toUpperCase()==='A');
    return stringWithA.toUpperCase();
}

console.log(findStringWithA(['apple', 'banana', 'cherry']));
// Should return 'APPLE'
