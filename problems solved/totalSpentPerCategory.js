function totalSpentPerCategory(expenses) {
    let categoryTotal = {};

    expenses.forEach(expense => {
        const { category, amount } = expense;

        if (categoryTotal[category]) {
            categoryTotal[category] += amount;
        }
        else {
            categoryTotal[category] = amount;
        }
    })
    return categoryTotal;
}

const expenses = [
    { category: 'Food', amount: 50 },
    { category: 'Transportation', amount: 30 },
    { category: 'Food', amount: 20 },
    { category: 'Entertainment', amount: 40 },
    { category: 'Transportation', amount: 25 }
];

console.log(totalSpentPerCategory(expenses));
// Should return: { Food: 70, Transportation: 55, Entertainment: 40 }

// function totalSpentPerCategory(expenses) {
//     let categoryTotal = expenses
//         .map(expense => ({ [expense.category]: expense.amount }))
//         .reduce((acc, curr) => {
//             const key = Object.keys(curr)[0];
//             if (acc[key]) {
//                 acc[key] += curr[key]
//             }
//             else {
//                 acc[key] = curr[key];
//             }
//             return acc;

//         }, {})
//     return categoryTotal;
// }