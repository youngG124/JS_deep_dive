//////////////////////// overriding / property shadowing //////
const Person = (function () {
    function Person(name) {
        this.name = name;
    }

    Person.prototype.sayHello = function () {
        console.log(`Hi! My name is ${this.name}`);
    };

    return Person;
}());

const me = new Person('Kim');

me.sayHello = function () {
    console.log(`Hey! My name is ${this.name}`);
};

me.sayHello();