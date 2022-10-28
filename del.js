const fs = require("fs");

const deleteNote = function (oldNotes, id) {
  let newNotes = JSON.parse(oldNotes);
  let remaining = newNotes.filter((note) => note.id !== id);

  fs.writeFileSync("note.txt", JSON.stringify(remaining));
  console.log("Note deleted.");
};

module.exports = deleteNote;
