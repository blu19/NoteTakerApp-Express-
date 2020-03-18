//are these correct? to use app.get, etc. yes
var express = require("express")
var app = express()
//or is this better? need both
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("public"))

var PORT = 4444

//says will need fs
//The application should have a db.json file on the backend that 
//will be used to store and retrieve notes using the fs module.
const fs = require("fs")

//are these correct/necesssary?
//is "db.json" correct for these?
const path = require("path")
const OUTPUT_DIR = path.resolve(__dirname, "db.json")
const outputPath = path.join(OUTPUT_DIR, "db.json")

//GET /notes - Should return the notes.html file.
app.get("/notes", function(req, res) {
  console.log("line 29 of server.js")
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

//GET * - Should return the index.html file
//same as previous comments, but for index.html
app.get("*", function(req, res) {
  console.log("inside the star")
  res.sendFile(path.join(__dirname, "public/index.html"))
})

// GET /api/notes - Should read the db.json file and return 
// all saved notes as JSON.
app.get("/api/notes", function(req, res) {
    console.log("inside /api/notes")
    console.log(JSON.parse("/db/db.json"))
  return JSON.parse("/db/db.json")
})

//empties out the notes
app.post("/api/clear", function(req, res) {
  notes.length = 0
  res.json({ ok: true })
})

//activates the listener PORT
app.listen(PORT, function() {
  console.log("App listening to " + PORT);
});