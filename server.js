"use strict";
var express = require("express");
var path = require("path");
var appproxy = require("./app");

var app = express();

app.use(appproxy);

//MIDDLEWARE: Defining static file
app.use(express.static("public"));

// Get the main route
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

// Set port
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
