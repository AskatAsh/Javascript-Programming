const fetchCategory = async () => {
    const data = await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
    const gotData = await data.json();
    const dataArray = gotData.data
    console.log(dataArray);
    getViews(dataArray);
}
fetchCategory();

const getViews = (dataArray) => {
    
    const viewsArray = [];
    dataArray.forEach(data => {
        const views = data.others.views;
        // console.log(views);
        const viewsInNum = removeLetterFromString(views);
        console.log(viewsInNum);
        viewsArray.push(viewsInNum);
        
    })
    // console.log(viewsArray);
    const sortedViews = descending(viewsArray);
    console.log(sortedViews);
}

const removeLetterFromString = (str) => {
    // const newString = str.slice(0, -1);
    const newString = str.substring(0, str.length-1);
    const toNum = parseFloat(newString);
    return toNum;
}

const descending = (myArray) => {
    myArray.sort((a, b) => b - a);
    // console.log(myArray);
    return myArray;
}

