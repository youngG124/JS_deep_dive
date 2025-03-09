function changeVal(primitive, obj) {
    primitive += 100;
    obj.name = 'Kim';
}

var num = 100;
var person = { name : 'Lee' };

changeVal(num, person);

console.log(num); // primitive value doesn't changed
console.log(person); // but object, the value changed