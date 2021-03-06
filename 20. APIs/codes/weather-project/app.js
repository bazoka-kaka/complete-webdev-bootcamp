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
  const appKey = "549eb5d9f33b2243589eb108c3dd5c65";
  const units = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${appKey}&units=${units}`;
  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const icon = weatherData.weather[0].icon;
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      res.write("<p>the weather is currently " + description + "</p>");
      res.write(
        "<h1>the weather in " + query + " is " + temp + " degrees celcius</h1>"
      );
      res.write(`<img src="http://openweathermap.org/img/wn/${icon}@2x.png">`);
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("server started at port 3000");
});
