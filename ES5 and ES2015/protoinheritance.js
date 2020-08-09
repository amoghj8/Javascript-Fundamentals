function User(firstname, lastName, dob) {
    this.firstname = firstname;
    this.lastName = lastName;
}

User.prototype.greeting = function () {
    return `Hi, ${this.firstname} ${this.lastName}`
}

function Customer(firstname, lastName, membership, phone) {
    User.call(this, firstname, lastName);
    this.membership = membership;
    this.phone = phone;
}

// Inherit proto methods of User
Customer.prototype = Object.create(User.prototype);

// Make customer proto return Customer()
Customer.prototype.constructor = Customer;
Customer.prototype.greeting = function () {
    return `Hello, ${this.firstname} `
}
const co1 = new Customer('a','j','std','012')
console.log(co1.greeting())
