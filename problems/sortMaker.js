function sortMaker(arr) {
    if(arr[0] < 0 || arr[1] < 0){
        return 'Invalid Input';
    }
    else{
        if(arr[0] < arr[1]){
            const temp = [];
            temp.push(arr[1]);
            temp.push(arr[0]);
            return temp;
            // let temp = arr[0];
            // arr[0] = arr[1];
            // arr[1] = temp;
            // return arr;
        }
        else if(arr[0] === arr[1]){
            return 'equal';
        }
        return arr;
    }
}

const myArray = [2,3];
const result = sortMaker(myArray);
console.log(result);