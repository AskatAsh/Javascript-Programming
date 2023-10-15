const fetchCategory = async () => {
    const data = await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
    const gotData = await data.json();
    const dataArray = gotData.data
    console.log(dataArray);
    getViews(dataArray);
}
fetchCategory();

const getViews = (dataArray) => {
    // const timeList = document.getElementById('showTime');
    dataArray.forEach(data => {
        const views = data.others.views;
        console.log(views);
        // const li = document.createElement('li');
    })
}