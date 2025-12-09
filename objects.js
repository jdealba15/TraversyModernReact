const user = {
    name: 'John Doe',
    age: 30,
};

// user.age = 31;

console.log(user);

const newUser = {
    ...user,
    age: 31,
};

console.log(user);
console.log(newUser);