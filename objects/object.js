var student = {
    id: 234,
    name: "Askat",
    class: 12,
    marks: 85
}
// console.log(student);
// console.log(student.name);
// student.class = 10;
// console.log(student);

var result = student.marks;
console.log(result);
var properties = Object.keys(student);
console.log(properties);
var propertyValues = Object.values(student);
console.log(propertyValues);
console.log(student['id']);