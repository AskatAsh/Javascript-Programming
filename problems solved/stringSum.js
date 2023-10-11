const words = ['the','overall', 'level', 'of', 'javascript', 'keeps', 'increasing'];
const stringSum = words.reduce((prev, curr) => prev+' '+curr);
console.log(stringSum);