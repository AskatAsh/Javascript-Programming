const fetchCategory = async () => {
    const data = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const gotData = await data.json();
    const dataArray = gotData.data
    // console.log(dataArray);
    getCategoryId(dataArray);
    getPostDate(dataArray);
}
fetchCategory();

const categoryList = document.getElementById('showCategory');
const getPostDate = (dataArray) => {
    dataArray.forEach(data => {        
        // console.log(data.category);
        category = data.category;
        const li = document.createElement('li');
        li.innerHTML = category;
        categoryList.appendChild(li);
    })
}

// categoryList.addEventListener('click', function(event){
//     console.log(event.target.innerHTML);
//     // getCategory(event.target.innerHTML)
// })


const getCategoryId = (dataArray) => {
    categoryList.addEventListener('click', function(event){
        console.log(event.target.innerHTML);
        const category = event.target.innerHTML;
        dataArray.forEach(data => {        
            if(category === data.category){
                console.log(data.category_id);
            }
        })
    })
    // dataArray.forEach(data => {        
    //     const categoryId = data.category_id;
    //     console.log(categoryId);
    // })
}