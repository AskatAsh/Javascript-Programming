const numbers = [10, 20, 30, 40, 50, 60, 70, 15, 25, 35, 45, 55, 65, 75];

const result = numbers.filter(n => n > 50);
// console.log(result);

const evenNumbers = numbers.filter(n => n%2 === 0);
// console.log(evenNumbers);

const friends = ['asif', 'rakib', 'shihab', 'rahim', 'hannan', 'babor', 'sumona'];

const oddFriends = friends.filter(frnd => frnd.length%2 === 1);
// console.log(oddFriends);

const firstBiggest = numbers.find(num => num > 66);
console.log(firstBiggest);