const person = {
    firstName:'Shinyeong',
    lastName:'Kim',

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
};

console.log(`${person.firstName} ${person.lastName}`);

person.fullName = 'Sanghee Gil';
console.log(person);

console.log(person.fullName);