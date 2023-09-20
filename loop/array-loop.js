var arr = [3, 45, 78, 10, 92, 23, 12];
console.log(arr);

for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}

sum = 0;
for(var i=0;i<arr.length;i++){
    sum = sum + arr[i];
}
console.log("sum of the array is: "+ sum);