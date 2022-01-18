const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const query = req.body.cityName;
  const apiKey = "549eb5d9f33b2243589eb108c3dd5c65";
  const unit = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    apiKey +
    "&units=" +
    unit;
  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      //weather temperature
      const temp = weatherData.main.temp;
      //weather description
      const weatherDescription = weatherData.weather[0].description;
      //weather icon
      const iconCode = weatherData.weather[0].icon;
      console.log(iconCode);

      const icon = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      const message = `<h1>The temperature in ${query} is ${temp} degrees Celsius.</h1>`;
      const message2 = `<p>The weather is currently ${weatherDescription}</p>`;
      const message3 = `<img src="${icon}" alt="${weatherDescription}">`;
      res.write(message);
      res.write(message2);
      res.write(message3);
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("server started at port 3000");
});
