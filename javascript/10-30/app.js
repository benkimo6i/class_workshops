var guessLib = require('./guess');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

//You can post JSON
app.use(bodyParser.json());

//Or use a <form>
app.use(
  bodyParser.urlencoded({ extended: true })
);

//use static files in public
app.use(express.static("public"));

//use the EJS templating engine
//(try changing this to "pug")
app.set('view engine', 'ejs');

var correct = guessLib.pickNumber();

//GET or POST both work
app.all('/guess', function(req, res) {
  var msg = "";

  if (req.body.num) {
    //get the visitor's guess from the form
    var guess = parseInt(req.body.num);
    msg = guessLib.checkNumber(guess, correct);
    msg = `${guess}: ${msg}`;
  }

  //uses views/guess.ejs (or .pug)
  res.render('guess', { message: msg });
});

app.listen(3000, function() {
  console.log("ExpressJS started on port 3000");
});
