const fs = require("fs");

const add = function (note = [], oldNote) {
  let finalNote = JSON.parse(oldNote);

  finalNote.push(note);

  let objectNote = JSON.stringify(finalNote);

  fs.writeFileSync("note.txt", objectNote);
  console.log("Note added.");
};

module.exports = add;
