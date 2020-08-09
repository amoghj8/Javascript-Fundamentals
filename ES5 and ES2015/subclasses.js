class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello there, ${this.firstName} ${this.lastName}`
    }
}

class User extends Person {

    constructor (firstName, lastName, phone) {
        super(firstName, lastName);
        this.phone = phone;
    }

    static getMembership() {
        return "Standard Membership"
    }
}

const user = new User('amogh', 'joshi', '123');
console.log(user.greeting());
console.log(User.getMembership());
console.log(user);