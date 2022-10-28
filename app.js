const add = require("./add");
const read = require("./read");
const present = require("./present");
const deleteNote = require("./del");
const update = require("./update");
// get user input
const cmd = process.argv;

var note = {};

if (cmd[2] == "add") {
  // Build Object
  note = {
    id: cmd[3],
    title: cmd[4],
    body: cmd[5],
  };
  // Get old note value
  var oldNote = read();
  // Add note to note.txt
  add(note, oldNote);
}

if (cmd[2] == "read") {
  present(read());
}

if (cmd[2] == "delete") {
  let id = cmd[3];
  let notes = read();
  deleteNote(notes, id);
}

if (cmd[2] == "update") {
  let oldNotes = read();
  let updateNotes = {
    id: cmd[3],
    title: cmd[4],
    body: cmd[5],
  };
  update(oldNotes, updateNotes);
}
