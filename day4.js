// 2025.3.9 bojung, KK

function changeVal(primitive, obj) {
    primitive += 100;
    obj.name = 'Kim';
}

var num = 100;
var person = { name : 'Lee' };

changeVal(num, person);

console.log(num); // primitive value doesn't changed
console.log(person); // but object, the value changed

/////////// scope ////

var x = 'global';

function foo() {
    var x = 'local';
    console.log(x);
}

foo();

console.log(x);