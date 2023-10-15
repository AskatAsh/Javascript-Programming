const toHourAndMinutes = (second) => {
    if(second >= 3600){
        const toHour = Math.floor(second/3600);
        const rem = second%3600;
        const toMinute = Math.floor(rem/60); 
 
        return `${toHour}h ${toMinute}m ago`;
    }
    else if(second >= 60 && second <= 3600){
        const toMinute = Math.floor(second/60);
        return `${toMinute}m ago`;
    }
    else{
        return `${second}s ago`;
    }
}

const second = 35;
const result = toHourAndMinutes(second);
console.log(result);