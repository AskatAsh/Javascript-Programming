const loadPhoneInfo = async (searchText = "samsung") => {
    const phoneData = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const phoneInfo = await phoneData.json();
    // console.log(phoneInfo.data);
    const phones = phoneInfo.data;
    displayPhoneInfo(phones);
}
loadPhoneInfo();

// get phone info from API and show in cards
const mainContainer = document.getElementById('phones-wrapper');
const displayPhoneInfo = (phones) => {
    
    mainContainer.innerHTML = ""; // clear container before entering new data
    console.log(phones.length);

    // display show all if there are more than 12 phones
    const showAllContainer = document.getElementById('showAllContainer');
    if(phones.length > 12){
        showAllContainer.classList.remove("hidden");
    }
    else{
        showAllContainer.classList.add("hidden");
    }

    // slicing phones array to display few phones
    phones = phones.slice(0, 12);

    // condition for giving wrong search input
    if(phones.length === 0){
        mainContainer.innerHTML = `
        <h2>Sorry! No info found on this phone!</h2>`;
    }
    phones.forEach(phone => {
        const phoneCard = document.createElement('div');
        phoneCard.setAttribute("id", "phone-card");
        phoneCard.innerHTML = `
                <div class="p-6 border-2 rounded-lg flex flex-col items-center gap-4">
                
                    <div id="img" class="bg-[#0D6EFD0D] flex justify-center items-center w-full py-10 rounded-lg">
                        <img src="${phone.image}" alt="">
                    </div>
                    <h3 class="text-2xl font-bold text-[#403F3F] text-center">${phone.phone_name}</h3>
                    <p class="text-base text-[#706F6F] text-center">There are many variations of passages of available, but the majority have suffered</p>
                    <p class="text-[#403F3F] text-2xl font-bold text-center">$999</p>
                    <button id="details" class="btn capitalize bg-[#0D6EFD] text-white rounded-lg px-6 py-2 font-semibold text-base" onclick="my_modal_4.showModal(); showDetails('${phone.slug}')">Show Details</button>
    
                </div>`
        mainContainer.appendChild(phoneCard);
    })
}

const showDetails = (id) => {
    // console.log(id);
    showPhoneDetails(id);
}

// get Phone details from API and show them in each card.
const modalDetails = document.getElementById('modal-details');
const showPhoneDetails = async(id) => {   
    const phoneDetails = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const details = await phoneDetails.json();
    const data = details.data;
    // console.log(data);
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.innerHTML = `
                    <div id="img" class="bg-[#0D6EFD0D] flex justify-center items-center w-full py-16 rounded-lg">
                        <img src="${data.image}" alt="">
                    </div>
                    <h3 class="font-bold text-3xl">${data.name}</h3>
                    <p class="text-xs py-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <p class="text-base md:text-lg"><span>Storage :</span> ${data.mainFeatures.storage}</p>
                    <p class="text-base md:text-lg"><span>Display Size :</span> ${data.mainFeatures.displaySize}</p>    
                    <p class="text-base md:text-lg"><span>Chipset :</span> ${data.mainFeatures.chipSet}</p>    
                    <p class="text-base md:text-lg"><span>Memory :</span> ${data.mainFeatures.memory}</p>    
                    <p class="text-base md:text-lg"><span>Slug :</span> ${data.slug}</p>    
                    <p class="text-base md:text-lg"><span>Release data :</span> ${data.releaseDate}</p>    
                    <p class="text-base md:text-lg"><span>Brand :</span> ${data.brand}</p>    
                    <p class="text-base md:text-lg"><span>GPS :</span> ${data.others.GPS}</p>`
    modalDetails.appendChild(detailsContainer);
}

// search function handler

const handleSearch = () => {
    const searchInput = document.getElementById('searchField');
    const searchText = searchInput.value;
    if(searchText === ""){
        loadPhoneInfo();
        alert("Enter a phone Brand and click search");
    }
    else{
        loadPhoneInfo(searchText);
    }
    // console.log(searchText);
}

document.getElementById('searchButton').addEventListener('click', function(){
    const loader = document.getElementById('loader');
    loader.classList.remove("hidden");
    handleSearch();  
})

// show all button function
document.getElementById('showAll').addEventListener('click', function(){

})