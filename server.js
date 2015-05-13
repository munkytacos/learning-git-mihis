// Grab the packages/variables that we will need

var express = require('express');
var app = express();

// CONFIGURE THE APP
// ==============================================
// Tell Node where to look for resources

app.use(express.static(__dirname + '/public'));
 
// app.get('/', function(req, res) {
//   res.sendfile(path.join('/public', 'index.html'))
// })
 
// var server = http.createServer(app)

// START THE SERVER
// ==============================================

app.listen(7000);
console.log('App started at http://localhost:7000');
