const express = require('express');

// app is basically like our application controller;
const app = express();

// tells the app controller where to look for views to render
app.use(express.static(__dirname + "/public/"));

// sets up root route to render index.html
app.get("/", function (req, resp) {
  resp.sendFile("index.html");
})

// listens on port 3000
app.listen('3000', function () {
  console.log('listening on port: 3000')
})