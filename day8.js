/**
 * 25.3.13
 * Dogok park starbucks
 */

const person = {
    name:'Lee',
    address:'Seoul',
    __proto__:{age:20}
};

function foo() {
    x = 10;

}
foo();

(function (a) {
    'use strict';
    a=2;

    console.log(arguments);
    console.log(a);
}(1));

const str = 'hello';
str.name='Lee'; // wrapper object
console.log(str.name);