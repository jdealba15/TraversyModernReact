const notes = [
    {
        title: 'Meeting Notes',
        content: 'Discuss project roadmap',
        isPinned: true,
    },
    {   title: 'Grocery List', 
        content: 'Buy milk, eggs, bread', 
        isPinned: false },
    {
        title: 'Workout Plan',
        content: 'Push day: Bench, Shoulder Press',
        isPinned: false,
    },
    {   title: 'Recipe Ideas', 
        content: 'Pasta, Salad, Tacos', 
        isPinned: false },
];

const noteTitles = notes.map((note) => note.content);
const noteTitlesA = notes.map((note, index) => `${index + 1}. ${note.title}`);
const pinnedNotes = notes.filter((note) => {
    return note.isPinned;
});

console.log(noteTitles);
console.log(noteTitlesA);
console.log(pinnedNotes);
