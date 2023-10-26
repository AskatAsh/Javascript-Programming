const circle = {
    radius: 5,
    updateRadius(newRadius) {
        return this.radius = newRadius;
    }
};

console.log(circle.radius);

circle.updateRadius(8);
console.log(circle.radius);
