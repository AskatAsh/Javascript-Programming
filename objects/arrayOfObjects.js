function findHighestSalaryEmployee(employees) {
    const highest = employees.reduce((min, max) => Math.max(min, max.salary), 0);
    return highest;
}

const employees = [
    { name: 'Alice', salary: 55000 },
    { name: 'Bob', salary: 60000 },
    { name: 'Charlie', salary: 75000 },
    { name: 'David', salary: 70000 },
];

const highestSalaryEmployee = findHighestSalaryEmployee(employees);
console.log(highestSalaryEmployee);