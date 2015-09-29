//server

var express = require('express');
//global.jQuery = require('jquery');
//var bootstrap = require('bootstrap');
//var router = express.Router();
var path = require('path');
var app = express();

//var index = require('./routes/index');
app.use(express.static(__dirname + '/public'));


//app.use(express.static(path.join(__dirname, './public')));

var server = app.listen(process.env.PORT || 3000, function(){
    //call back function tells us we are up and running
    var port = server.address().port;
    console.log('Listening on port: ', port);
});

app.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname,'public/views/index.html'));
});

app.get('/D.json', function(req, res, next) {
    res.sendFile(path.join(__dirname,'public/assets/D.json'));
});
app.get('/R.json', function(req, res, next) {
    res.sendFile(path.join(__dirname,'public/assets/R.json'));
});

app.get('/favicon.ico', function(req, res, next) {
    res.sendFile(path.join(__dirname,'public/views/favicon.ico'));
});



//module.exports = router;