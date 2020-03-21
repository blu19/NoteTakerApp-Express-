const path = require("path");

//are these correct/necesssary?
//is "db.json" correct for these?
// const OUTPUT_DIR = path.resolve(__dirname, "../db/db.json")
// const outputPath = path.join(OUTPUT_DIR, "../db/db.json")
const htmlRoutes = require("express").Router()

//GET /notes - Should return the notes.html file.
    htmlRoutes.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"))
    });

//GET * - Should return the index.html file
//same as previous comments, but for index.html
    htmlRoutes.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })

module.exports=htmlRoutes