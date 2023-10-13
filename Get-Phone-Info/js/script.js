const loadPhoneInfo = async () =>{
    const phoneData = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const phoneInfo = await phoneData.json();
    // console.log(phoneInfo.data);
    const phones = phoneInfo.data;
    displayPhoneInfo(phones);
}

const displayPhoneInfo = (phones) => {
    // console.log(phones);
    phones.forEach(phone => {
        console.log(phone);
    })
}

loadPhoneInfo();

// // load phone info using fetch api
// const loadPhoneInfo = () => {
//     fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
//         .then(data => data.json())
//         .then(json => console.log(json.data))
// }
// loadPhoneInfo();