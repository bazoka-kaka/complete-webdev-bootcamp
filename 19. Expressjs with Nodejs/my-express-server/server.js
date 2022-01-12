const { response } = require("express");
const express = require("express");

// a function that represents express module
const app = express();

app.get("/", function (req, res) {
  res.send("<h1 style='color: red; font-family: sans-serif'>Hello World!</h1>");
});

app.get("/contact", function (req, res) {
  res.send(
    "<p><strong style='color: red'>Contact me</strong> on: kakanihonjin@gmail.com</p>"
  );
});

//this listens on a specific port for any HTTP request
//that gets sent to our server
app.listen(3000, function () {
  console.log("server started on port 3000!");
});
