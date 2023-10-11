function cheapestPhone(phones){
    let cheapest = phones[0].price;
    let brand = '';
    for(let i=0; i<phones.length; i++){
        // console.log(phones[i].price);
        if(phones[i].price < cheapest){
            cheapest = phones[i].price;
            brand = phones[i].name;
        }
    }
    console.log(brand, cheapest);
}

const phones = [
    {name: 'samsung', camera: 12, storage: '32gb', price: 36000, color: 'naviblue'},
    {name: 'xiaomi', camera: 12, storage: '32gb', price: 26000, color: 'naviblue'},
    {name: 'oppo', camera: 12, storage: '32gb', price: 16000, color: 'naviblue'},
    {name: 'vivo', camera: 12, storage: '32gb', price: 30000, color: 'naviblue'},
    {name: 'apple', camera: 12, storage: '32gb', price: 41000, color: 'naviblue'},
    {name: 'nokia', camera: 12, storage: '32gb', price: 12000, color: 'naviblue'}
]

let theCheapest = cheapestPhone(phones);
// console.log(theCheapest);