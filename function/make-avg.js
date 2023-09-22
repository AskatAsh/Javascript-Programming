function make_avg(arr, size){
    sum = 0;
    for(var i=0;i<size;i++){
        sum = sum + arr[i];
    }
    var avg = sum/size;
    return avg;
}
var myArray = [2, 4, 6, 8, 10];
var average = make_avg(myArray, 5);
console.log(average);