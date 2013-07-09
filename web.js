var express = require('express');

var sfs = require('fs');

var fileData = sfs.readFileSync("index.html");
var fileString = fileData.toString();

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(fileString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
