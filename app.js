// IMPORTS
require("dotenv").config();
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

// define app as instance of Express.js, and port 5000
const app = express();
const port = 5000 || process.env.PORT; 

// MIDDLEWARES 
app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 
// Static files 
app.use(express.static("public"));  
// templating engines
app.use(expressLayouts); 
app.set("layout", "./layouts/main"); // create a layout to be reused
app.set("view engine", "ejs"); 

// ROUTE HANDLERS
    // Home 
app.get("/", (req, res) => res.send("Hello, World!")); 

app.listen(port, () => {
    console.log(`App listening on port '${port}'`)
    console.log('Test GET on: http://localhost:5000/')
})