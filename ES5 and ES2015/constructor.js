function Person(name,dob) {
    this.name = name;
    let diff = Date.now() - new Date(dob)
    this.calcAge = function() {
        return new Date(diff).getUTCFullYear() - 1970;
    }
}

const aj = new Person('amogh', '2-8-1998')
console.log(aj.calcAge())