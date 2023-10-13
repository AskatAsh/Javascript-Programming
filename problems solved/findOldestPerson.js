function findOldestPerson(people, age){
    // const result = people.filter(person => person.age >= age).find(oldest => oldest);
    // return result;
    return people.find(person => person.age >= age);
}

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Boby', age: 30 },
    { name: 'Charlie', age: 20 }
  ];
  
console.log(findOldestPerson(people, 26)); // Should return { name: 'Bob', age: 30 }
  