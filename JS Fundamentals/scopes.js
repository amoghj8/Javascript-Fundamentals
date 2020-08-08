// Global scope
var x=0;
let i = 100;

//function scope
(function() {
    var x = 50;
    let i = 10;
    console.log(x);
    console.log(i);
})()

console.log(x)
console.log(i)

// block scope
for(var x=1;x<=9;x++){let i = 1000; console.log(i)};

console.log(x);
console.log(i);