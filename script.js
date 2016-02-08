var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = 8080;

app.use("/js", express.static('public/js'));
app.use('/css', express.static('public/css'));

// This is the bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/home.html');
});
app.get('/regi', function(req, res) {
  res.sendFile(process.cwd() + '/views/home.html');
});

app.listen(PORT, function() {
  console.log('App listening on port %s', PORT);
});
