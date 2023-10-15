const fetchCategory = async () => {
    const data = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const gotData = await data.json();
    const dataArray = gotData.data
    // console.log(dataArray);
    getPostDate(dataArray);
}
fetchCategory();    

const getPostDate = (dataArray) => {
    const categoryList = document.getElementById('showCategory');
    dataArray.forEach(data => {
        
        // console.log(data.category);
        category = data.category;
        const li = document.createElement('li');
        li.innerHTML = category;
        categoryList.appendChild(li);
    })
}