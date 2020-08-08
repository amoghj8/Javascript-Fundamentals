numbers = [4,5,6,7]
numSQ = [1,2,3,4]

// Use forEach and alter the values
numSQ.forEach((element,index) => {
    numSQ[index] = element**2;
});
console.log(numSQ)

// Use map and alter values
sq = numbers.map(element => element**2)
console.log(sq)
console.log(numbers)

// for .. in 
user = {
    firstName: 'A',
    lastName: 'J'
}

for (const key in user) {
    console.log(`${key} : ${user[key]}`)
}