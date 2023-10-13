
// load phone info using fetch api
const loadPhoneInfo = () => {
    fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => data.json())
        .then(json => console.log(json.data))
}
loadPhoneInfo();