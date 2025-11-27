const notes = [
    { title: 'Meeting Notes', content: 'Discuss project roadmap'},
    { title: 'Grocery List', content: 'Buy milk, eggs, bread'},
    { title: 'Workout Plan', content: 'Push day: Bench, Shoulder Press' },
    { title: 'Recipe Ideas', content: 'Paste, Salad, Tacos' },
];

const [firstNote, secondNote, ...otherNotes] = notes;

console.log(firstNote);
console.log(secondNote.title);
sprdContent = otherNotes.forEach(note => console.log(note.content));
