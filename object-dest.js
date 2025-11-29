const note = {
    title: "Meeting Notes",
    content: 'Discuss project roadmap',
    isPinned: true,
};

const { title } = note;

console.log(title);

const { title: noteTItle, isPinned } = note;

console.log(noteTItle);


// next task, perhaps find way to integrate a template literal?

const newNote = `
    title: ${note.title}
    content: ${note.content + ' (Please add any comments or thoughts here).'}
    status: ${note.isPinned ? '📌 Special note' : 'Regular Note'}
`;

console.log(newNote);