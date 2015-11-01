var express = require('express');
var path = require('path');

var app = express();

var temperatura = require("./temp.js");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// set the view engine to ejs
app.set('view engine', 'ejs'); // http://expressjs.com/api.html#app.set

var expressLayouts = require('express-ejs-layouts');
app.set('layout', 'layout');

app.use(express.static('.'));
app.use(expressLayouts);

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));

app.set('port', (process.env.PORT || 8080));


app.get('/', function(req, res){
  res.render('index');
});

app.post('/', function(req, res){
  var temp_inicial = new temperatura();
  temp_inicial.inicializador(req.body.ini_temp);

  var result = temp_inicial.conversor();
  res.render('res', {RES: result});
});

app.listen(app.get('port'), function() {
  console.log("La NodeAPP está corriendo en: http://localhost:" + app.get('port'));
});
