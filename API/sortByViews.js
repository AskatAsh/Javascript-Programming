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
    const viewsArray = [];
    dataArray.forEach(data => {
        const views = data.others.views;
        // console.log(views);
        const viewsInNum = removeLetterFromString(views);
        console.log(viewsInNum);
        viewsArray.push(viewsInNum);
        // const li = document.createElement('li');
    })
    console.log(viewsArray);
}

const removeLetterFromString = (str) => {
    // const newString = str.slice(0, -1);
    const newString = str.substring(0, str.length-1);
    const toNum = parseFloat(newString);
    return toNum;
}