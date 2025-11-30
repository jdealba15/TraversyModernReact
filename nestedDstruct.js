const user = {
    name: 'Ben',
    address: { city: 'Boston', state: 'MA' },
    hobbies: ['Movies', 'Sports', 'Music']
};

const { 
    name,
    hobbies: [firstHobby], 
} = user;
console.log(firstHobby);

const {
    hobbies: [, , otherHobby],
} = user;
console.log(otherHobby);





