var express = require('express');
var app = express();

app.use(express.static("public"));

app.set('view engine', 'ejs');

//global object: stand-in for database
var stoogeData = {
  stooges: ["Moe", "Larry", "Curly"]
};

//uses view template on SERVER
app.get('/stooges.html', function(req, res) {
  res.render('stooges', stoogeData);
});

//uses view template on CLIENT (aka the browser)
app.get('/stooges.json', function(req, res) {
  //only send the array
  res.json(stoogeData.stooges);
});

app.listen(3000);
