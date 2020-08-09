class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello there, ${this.firstName} ${this.lastName}`
    }
}

const aj = new Person('a', 'j')
console.log(aj.greeting())