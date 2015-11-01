var express = require('express');
var path = require('path');

var app = express();

var expressLayouts = require('express-ejs-layouts');
app.set('layout', 'layout');

app.use(express.static('.'));
app.use(expressLayouts);

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));

app.set('port', (process.env.PORT || 8080));

app.get('/', function(req, res){
  res.render('index');
});

app.post('/res', function(req, res){
  //res.send('Prueba: ' + req.body.ini_temp);
  resultado.innerHTML = req.body.ini_temp;
  res.render('index');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
