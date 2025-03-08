// Cafe KK Bojung

/////////// copy ////

var score = 80;
var copy = score;

console.log(score);
console.log(copy);

score = 100;

console.log(score);
console.log(copy); // only score changed.

copy = score;

console.log(copy); // now copy changed too, but stored in another memory space.

//////////// function literal ////
var f = function add(x, y) {
    return x + y;
}