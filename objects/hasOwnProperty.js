function checkObj(obj, property){
    if(obj.hasOwnProperty(property)){
        return obj[property];
    }
    else{
        return "Not Found!";
    }
}
// const result = checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift");
const result = checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house");

console.log(result);