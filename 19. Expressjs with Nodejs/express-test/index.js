const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=malang&appid=549eb5d9f33b2243589eb108c3dd5c65&units=metric";
  https.get(url, function (response) {
    //do something here
    console.log(response.statusCode);
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const icon = weatherData.weather[0].icon;
      const desc = weatherData.weather[0].description;
      const img = `http://openweathermap.org/img/wn/${icon}@4x.png`;
      res.write("<h1>Temperature: " + temp + " Degree Celsius</h1>");
      res.write("<h2>Description: " + desc + "</h2>");
      res.write("<img src='" + img + "' alt='image'>");
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("Server started at port 3000");
});
