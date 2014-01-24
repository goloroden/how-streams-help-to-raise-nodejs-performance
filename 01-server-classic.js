'use strict';

var fs = require('fs'),
    http = require('http'),
    path = require('path');

var server = http.createServer(function (req, res) {
  fs.readFile(path.join(__dirname, req.url), function (err, data) {
    res.write(data);
    res.end();
  });
});

server.listen(3000);
