// this function fetches the main API
const fetchData = async () => {
    const data = await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
    const gotData = await data.json();
    // console.log(gotData);
    getStatus(gotData);
    showAllDefault(gotData);
    getViews(gotData.data);
}
fetchData();

// this function checks if there is any data present or not
const getStatus = (mainData) => {
    console.log(mainData.status);
    const dataStatus = mainData.status;
    if(dataStatus && mainData.data != []){
        console.log("The status is OK!");
    }
    else{
        console.log("Sorry!! no data to show");
        console.log(mainData.message);
    }
}

// console.log(postDate);
// const li = document.createElement('li');
// if(postDate ===''){
//     li.innerHTML = 'no time';
//     timeList.appendChild(li);
// }
// else{
//     const convertedTime = toHourAndMinutes(parseInt(postDate));
//     li.innerHTML = convertedTime;
//     timeList.appendChild(li);
// }  


// Add click event to categories
// const categories = document.getElementById('categories');
// categories.addEventListener('click', function(event){
//     console.log(event.target.innerHTML);
//     const selectedCategory = event.target.innerHTML;
//     if(selectedCategory === 'All'){
//         console.log("Show all Vlogs!");
//     }
//     else if(selectedCategory === 'Music'){
//         console.log("Show Music Vlogs!");
//     }
//     else if(selectedCategory === 'Comedy'){
//         console.log("Show Comedy Vlogs!");
//     }
//     else if(selectedCategory === 'Drawing'){
//         console.log("Show Drawing Vlogs!");
//     }
// })

// show All categories cards
const cardsContainer = document.getElementById('main-container');
const showAllDefault = (gotData) => {
    // console.log(gotData.data);
    const dataArray = gotData.data;
    dataArray.forEach(data => {
        const wrapper = document.createElement('div');
        wrapper.setAttribute("id", "wrapper");
        // console.log(data.title);
        wrapper.innerHTML = `<p>${data.title}</p>
        <p>${data.others.views}</p>`
        cardsContainer.appendChild(wrapper);
    })
}

// add click event to sortByViews

// this function get the views from API
const getViews = (dataArray) => {
    // console.log(dataArray);
    const viewsArray = [];
    dataArray.forEach(data => {
        const views = data.others.views;
        // console.log(views);
        const viewsInNum = removeLetterFromString(views);
        // console.log(viewsInNum);
        viewsArray.push(viewsInNum);
        
    })
    // console.log(viewsArray);
    const sortedViews = descending(viewsArray);
    console.log(sortedViews);
    // showTheViews(sortedViews);
}

// this function removes last character 'K' from views
const removeLetterFromString = (str) => {
    // const newString = str.slice(0, -1);
    const newString = str.substring(0, str.length-1);
    const toNum = parseFloat(newString);
    return toNum;
}
// This function sorts the views array in descending order
const descending = (myArray) => {
    myArray.sort((a, b) => b - a);
    // console.log(myArray);
    return myArray;
}

// const viewList = document.getElementById('displayViews');
// const showTheViews = (sortedViews) => {
    
//     sortedViews.forEach(view => {
//         const li = document.createElement('li');
//         li.innerHTML = view;
//         viewList.appendChild(li);
//         console.log(view);
//     })
// }
