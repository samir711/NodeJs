
console.log('Starting notes.js');

const fs = require('fs');

let addNote = (title,body) => {
  var notes = [];
  var note = {
    title,
    body
  };
  
try {
  var notesString = fs.readFileSync('notes-data.json');
  notes = JSON.parse(notesString);
} catch (e) {
  
  }
  
  let duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  };
  
};

let getAll = () => {
  console.log('Getting all notes. ');
};

let getNote = (title) => {
  console.log('Getting note', title);
}

let removeNote = (title) => {
  console.log('Removing note ' , title);
};
module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote

};




// module.exports.addNote = () => {

//   console.log('addNote');
//   return 'New note';
// };

// module.exports.add = (a, b) => {
//   return a + b;

// }