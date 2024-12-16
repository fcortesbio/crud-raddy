// IMPORTS
require("dotenv").config();
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan")

// define app as instance of Express.js, and port 5000
const app = express();
const port = 5000 || process.env.PORT; 

// MIDDLEWARES 
app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 
app.use(express.static("public"));  // Static files 
// templating engines
app.use(expressLayouts); 
app.set("layout", "./layouts/main");
app.set("view engine", "ejs"); 
// app.use(morgan("common"))
app.use(morgan(":method :url :status :res[content-lenght] - :response-time ms :date[web]"))

// ROUTE HANDLERS
// Home 
app.get("/", (req, res) => {

    const locals = {
        title : "NodeJs",
        description : "Free NodeJS User Management System"
    }
    res.render("index", locals)
}); 

// Handle 404 
app.get("*", (req, res) => {
    const locals = {
        title: "404", 
        description: "The requested object could not be found in server"
    }
    res.status(404).render("404")
})

app.listen(port, () => {
    console.log(`App listening on port '${port}'`)
    console.log('Test GET on: http://localhost:5000/')
})