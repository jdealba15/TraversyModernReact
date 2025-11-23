const person = {
    name: 'Brad',
    sayHelloRegulars: function () {
        console.log('Regular: ', this.name);
    },
    sayHellowArrow: () => console.log('Arrow: ', this.name)
};

person.sayHelloArrow();