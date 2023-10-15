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
            li.innerHTML = postDate;
            timeList.appendChild(li);
        }     
    })
}
