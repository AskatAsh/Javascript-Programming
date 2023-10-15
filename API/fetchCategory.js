const fetchCategory = async () => {
    const data = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const gotData = await data.json();
    const dataArray = gotData.data
    console.log(dataArray);
}
fetchCategory();    