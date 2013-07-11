var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

var contents = fs.readFileSync("index.html");

var contents_string = contents.toString();

app.get('/', function(request, response) {
  response.send(contents_string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
