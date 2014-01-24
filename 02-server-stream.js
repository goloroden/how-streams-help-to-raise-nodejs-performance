'use strict';

var fs = require('fs'),
    http = require('http'),
    path = require('path');

var server = http.createServer(function (req, res) {
  var readableStream = fs.createReadStream(path.join(__dirname, req.url));
  readableStream.pipe(res);
});

server.listen(3000);
