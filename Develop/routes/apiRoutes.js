//says will need fs
//The application should have a db.json file on the backend that
//will be used to store and retrieve notes using the fs module.
const fs = require("fs")
const apiRoutes = require("express").Router()

let dbInput = require("../db/db.json")

// const path = require("path")

console.log(dbInput)
//are these correct/necesssary?
//is "db.json" correct for these?
// const OUTPUT_DIR = path.resolve(__dirname, "../db/db.json")
// const outputPath = path.join(OUTPUT_DIR, "../db/db.json")

let noteId = dbInput.map(note=>note.id)
console.log(noteId)

// GET /api/notes - Should read the db.json file and return 
// all saved notes as JSON.
    apiRoutes.get("/notes", function(req, res) {
        console.log("in the get")
        console.log(dbInput)

        //return (dbInput)
        res.json(dbInput)
    })

// posts the notes to api
    apiRoutes.post("/notes", function(req, res) {
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
        res.json(dbInput)
    })

module.exports=apiRoutes