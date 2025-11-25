const number = 3;

const message = number % 2 === 0 ? 'Even Number' : 'Odd Number';

console.log(message);

//Second excample

const note = {
    title: 'Meeting notes',
    content: 'Discuss project roadmap',
    timestamp: Date.now(),
    isPinned: false,
};

const noteText = `
    Title: ${note.title}
    Status: ${note.isPinned ? '📌 Pinned Note' : 'Regular Note'}
    Last Edited: ${new Date(note.timestamp).toLocaleString()}
    `;

console.log(noteText);
    