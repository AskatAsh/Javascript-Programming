const fetchTime = async () => {
    const data = await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
    const gotData = await data.json();
    const dataArray = gotData.data
    console.log(dataArray);
    getPostDate(dataArray);
}
fetchTime();

const getPostDate = (dataArray) => {
    const timeList = document.getElementById('showTime');
    dataArray.forEach(data => {
        const postDate = data.others.posted_date;
        // console.log(postDate);
        const li = document.createElement('li');
        if(postDate ===''){
            li.innerHTML = 'no time';
            timeList.appendChild(li);
        }
        else{
            const convertedTime = toHourAndMinutes(parseInt(postDate));
            li.innerHTML = convertedTime;
            timeList.appendChild(li);
        }     
    })
}

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