const notes = ['Meeting Notes', 'Grocery List', 'Daily Tasks'];
notes.push('Workout Plan');
console.log(notes);

const slice = notes.slice(1, 2);
console.log(slice);

const splice = notes.splice(1, 1, 'Christmas Gifts');
console.log(splice);
console.log(notes);

//Added use of 'push', 'slice' and 'splice'...

const newNotes = notes.map((note) => note === 'Daily Tasks' ? 'Project Goals' : note);
console.log(newNotes);

