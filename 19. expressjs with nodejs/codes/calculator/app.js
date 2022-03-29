const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const n1 = Number(req.body.num1);
  const n2 = Number(req.body.num2);
  const ans = n1 + n2;
  res.send("result = " + ans);
});

app.listen(3000, function () {
  console.log("server started at port 3000");
});
