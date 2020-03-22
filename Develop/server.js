//are these correct? to use app.get, etc. yes
var express = require("express")
var app = express()

//or is this better? need both
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("public"))

var PORT = 4444

const htmlRoutes = require("./routes/htmlRoutes")
const apiRoutes = require("./routes/apiRoutes")

//route order matters
app.use("/api", apiRoutes)
app.use("/", htmlRoutes)

//activates the listener PORT
app.listen(PORT, () => {
  console.log("App listening to " + PORT);
});