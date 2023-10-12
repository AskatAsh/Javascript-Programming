const transactions = [{ amount: 50 }, { amount: 30 }, { amount: 70 }];
const sum = transactions.reduce((total, price) => total + price.amount, 0);
console.log(sum);