
console.log('Starting notes.js');

const fs = require('fs');

let fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

let saveNotes = (notes) => {

  fs.writeFileSync('notes-data.json', JSON.stringify(notes));

};

let addNote = (title,body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  let duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
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