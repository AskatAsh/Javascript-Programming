const loadPhoneInfo = async () => {
    const phoneData = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const phoneInfo = await phoneData.json();
    // console.log(phoneInfo.data);
    const phones = phoneInfo.data;
    displayPhoneInfo(phones);
}


const displayPhoneInfo = (phones) => {
    const mainContainer = document.getElementById('phones-wrapper');
    // console.log(phones);
    phones.forEach(phone => {
        console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.setAttribute("id", "phone-card");
        phoneCard.innerHTML = `
                <div class="p-6 border-2 rounded-lg flex flex-col items-center gap-5">
                
                    <div id="img" class="bg-[#0D6EFD0D] flex justify-center items-center w-full py-10 rounded-lg">
                        <img src="${phone.image}" alt="">
                    </div>
                    <h3 class="text-2xl font-bold text-[#403F3F] text-center">${phone.phone_name}</h3>
                    <p class="text-base text-[#706F6F] text-center">There are many variations of passages of available, but the majority have suffered</p>
                    <p class="text-[#403F3F] text-2xl font-bold text-center">$999</p>
                    <a class="bg-[#0D6EFD] text-white rounded-lg px-5 py-2 font-semibold text-center">Show Details</a>
    
                </div>`
        mainContainer.appendChild(phoneCard);
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