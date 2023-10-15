// this function fetches the main API
const fetchData = async () => {
    const data = await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
    const gotData = await data.json();
    console.log(gotData);
    // const dataArray = gotData.data
    // console.log(dataArray);
    getStatus(gotData);
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
const categories = document.getElementById('categories');
categories.addEventListener('click', function(event){
    console.log(event.target.innerHTML);
    const selectedCategory = event.target.innerHTML;
    if(selectedCategory === 'All'){
        console.log("Show all Vlogs!");
    }
    else if(selectedCategory === 'Music'){
        console.log("Show Music Vlogs!");
    }
    else if(selectedCategory === 'Comedy'){
        console.log("Show Comedy Vlogs!");
    }
    else if(selectedCategory === 'Drawing'){
        console.log("Show Drawing Vlogs!");
    }
})