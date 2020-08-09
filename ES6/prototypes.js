function User(firstname, lastName, dob) {
    this.firstname = firstname;
    this.lastName = lastName;
    this.bday = new Date(dob);
}

User.prototype.calcAge = function () {
    const diff = Date.now() - this.bday.getTime();
    const ageDate = new Date(diff);
    return ageDate.getUTCFullYear() - 1970;
}

User.prototype.getFullName = function() {
    return `${this.firstname}  ${this.lastName}`
}
const aj = new User('A','J', '2-8-1998');
console.log(aj);