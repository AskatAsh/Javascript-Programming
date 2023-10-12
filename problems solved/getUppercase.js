// const words = ['hello', 'WORLD', 'JavaScript', 'lowercase'];
// const words = ['a', 'b', 'c', 'D', 'E'];
const words = ['UPPERCASE', 'lowercase', 'MiXeD', 'cApItAlS'];

const onlyUpperCase = words.filter(word => {
    for(const letter of word){
        if(letter>='A' && letter<='Z'){
            return true;
        }
    }
    return false;
});

console.log(onlyUpperCase);