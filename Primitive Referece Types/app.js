// Primitive types
const name = 'Amogh Joshi'
const age = 32
const isJS = true
let test
const sym = Symbol()
const nullConst = null

console.log(typeof name)
console.log(typeof age)
console.log(typeof isJS)
console.log(typeof test)
console.log(typeof sym)
console.log(nullConst)

// Reference types
const numbers = [1,2,3,4]
numbers.push(5)
console.log(numbers)

const date = new Date()
console.log(date)

const newObject = {
    city : 'Mysore',
    pincode : 570023
}
newObject.pincode = 570018
console.log(newObject)