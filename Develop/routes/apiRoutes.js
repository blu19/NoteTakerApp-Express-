//says will need fs
//The application should have a db.json file on the backend that
//will be used to store and retrieve notes using the fs module.
const fs = require("fs")

let dbInput = require("../db/db.json")
// const path = require("path");

//are these correct/necesssary?
//is "db.json" correct for these?
// const OUTPUT_DIR = path.resolve(__dirname, "../db/db.json")
// const outputPath = path.join(OUTPUT_DIR, "../db/db.json")

let noteId = dbInput.map(note=>note.id)

module.exports = function (app) {
// GET /api/notes - Should read the db.json file and return 
// all saved notes as JSON.
    app.get("/api/notes", function(req, res) {
        return JSON.parse(dbInput)
    })

// posts the notes to api
    app.post("/api/notes", function(req, res) {
        let newNoteId = 0;
        while (noteId.includes(newNoteId)) {
            newNoteId++
        }
        noteId.push(newNoteId)
        const newNote = {
            id: newNoteId,
            title: req.body.title,
            text: req.body.text
        }
        dbInput.push(newNote)

        fs.writeFile("./db/db.json", JSON.stringify(dbInput), "utf8", (err, data) => {
            if (err) throw err
        })
        res.json({ ok: true })
    })
}