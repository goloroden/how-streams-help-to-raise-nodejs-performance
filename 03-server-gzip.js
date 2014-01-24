'use strict';

var fs = require('fs'),
    http = require('http'),
    path = require('path'),
    zlib = require('zlib');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Encoding': 'gzip'
  });

  fs.createReadStream(path.join(__dirname, req.url))
    .pipe(zlib.createGzip())
    .pipe(res);
});

server.listen(3000);
