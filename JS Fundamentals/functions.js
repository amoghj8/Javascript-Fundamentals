// Funtion declaration
function Hello(name='Amogh') {
    console.log('Hello ' + name);
}

Hello();
Hello('Magnifico')

//Function expressions
const hi = function(name='AJ') {
    console.log(name);
};

hi();
hi('JS');

// IIFE

(function IIFE() {
    console.log('This is done through IIFE')
})();