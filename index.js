const numbers = [1, 2, 3, 4, 5];

const double = numbers.map(function (number) {
    return number * 2;
});

console.log(double)

//Demonstration of arrow functions, can't be called before declaration

regular();

function regular() {
    console.log('Regular');
}

const arrow = () => console.log('Arrow');

arrow();