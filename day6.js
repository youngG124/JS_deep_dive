/**
 * 2025.3.11 day 6
 * Doncheon-dong Kink coffee, alone
 */

// ES6 Rest parameter
function sum(...args) {
    return args.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1,2));
console.log(sum(1,2,3,4,5));

/////////// prototype ////

function Circle(radius) {
    this.radius = radius;
}

Circle.prototype.getArea = function () {
    return Math.PI * this.radius ** 2;
}

const circle1 = new Circle(1);
const circle2 = new Circle(2);


console.log(circle1.getArea === circle2.getArea); // same instance, true
console.log(circle1.getArea());
console.log(circle2.getArea());
