const user = {
    name: 'Ben',
    address: { city: 'Boston', state: 'MA' }
};

const { name } = user;
const { address: { city } } = user;
console.log(name);
console.log(city);