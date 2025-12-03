const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((total, number) => total + number, 0);
console.log(sum);

// reduce method for object

const notes = [
    { title: 'Meeting Notes', content: 'Discuss project roadmap', isPinned: true },
    { title: 'Grocery List', content: 'Buy milk, eggs, bread', isPinned: false },
    { title: 'Workout Plan', content: 'Push day: Bench, Shoulder Press', isPinned: false },
    { title: 'Recipe Ideas', content: 'Pasta, Salad, Tacos', isPinned: false },
];

const totalCharacters = notes.reduce((total, note) => total + note.content.length, 0);
console.log(totalCharacters);