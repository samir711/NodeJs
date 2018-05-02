// const obj = {
//       name: 'Andrew'

// };

// let stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// let personString = '{"name":"Andrew","age":25}';
// let person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var OriginalNote = {
  title: 'Some title',
  body: 'Some body'
};

let originalNoteString = JSON.stringify(OriginalNote)
fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');
let note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);