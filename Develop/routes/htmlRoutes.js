const path = require("path");

//are these correct/necesssary?
//is "db.json" correct for these?
// const OUTPUT_DIR = path.resolve(__dirname, "../db/db.json")
// const outputPath = path.join(OUTPUT_DIR, "../db/db.json")

module.exports = function (app) {
//GET /notes - Should return the notes.html file.
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

//GET * - Should return the index.html file
//same as previous comments, but for index.html
    app.get("*", function(req, res) {
        console.log("inside the star")
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })
}