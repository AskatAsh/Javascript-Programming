function findAddress(obj) {
    if(obj.hasOwnProperty("street") && obj.hasOwnProperty("house") && obj.hasOwnProperty("society"))
    {
        // return Object.values(obj);
        let result = obj["street"]+','+obj["house"]+','+obj["society"];
        return result;
    }
    else{
        if(obj.hasOwnProperty("street") !== true){
            obj["street"] = '__';
        }
        if(obj.hasOwnProperty("house") !== true){
            obj["house"] = '__';
        }
        if(obj.hasOwnProperty("society") !== true){
            obj["society"] = '__';
        }
        let result = obj["street"]+','+obj["house"]+','+obj["society"];
        return result;
    }
}

const myObject = {
    street:10,
    // house:"15A",
    society:"Earth Perfect"
};
const result = findAddress(myObject);
console.log(result);