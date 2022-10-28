const fs = require("fs");

const update = function (oldNotes, updateNote) {
  let notes = JSON.parse(oldNotes);
  let updates = notes.map((note) => {
    if (note.id == updateNote.id) {
      note.title = updateNote.title;
      note.body = updateNote.body;
    }
    return note;
  });
  fs.writeFileSync("note.txt", JSON.stringify(updates));
  console.log("Note updated.");
};

module.exports = update;
