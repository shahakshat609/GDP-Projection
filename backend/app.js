const express = require('express');
var request = require('request');
const cors = require('cors');
const corsOptions = {
  origin: 'http://locahlost:3001',
  credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
const app = express();
app.get('/api/graph', function (req, res) {
    console.log("Hitting the api/graph api")
    request('http://api.worldbank.org/countries/USA/indicators/NY.GDP.MKTP.CD?per_page=5000&format=json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body)
        res.send(body) // Print the google web page.
     }
})
  //res.send('Welcome to the GDP-Projection Project');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});