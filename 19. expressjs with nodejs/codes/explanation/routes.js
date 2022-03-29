const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function (req, res) {
  res.send("email: yehezkielwiradhika@gmail.com");
});

app.get("/about", function (req, res) {
  res.send("my name is Yehezkel Wiradhika");
});

app.listen(3000, function () {
  console.log("server started at port 3000");
});
