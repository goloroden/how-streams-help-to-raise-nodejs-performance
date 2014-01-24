'use strict';

var stream = require('stream'),
    util = require('util');

var Duplex = stream.Duplex;

var MyStream = function (options) {
  Duplex.call(this, options);
  // ...
};

util.inherits(MyStream, Duplex);

MyStream.prototype._read = function (chunk, encoding, callback) {
  // this.push(...);
  // this.push(null);
};

MyStream.prototype._write = function (chunk, encoding, callback) {
  // ...
  // callback();
};
