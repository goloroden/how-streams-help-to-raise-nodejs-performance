'use strict';

var stream = require('stream'),
    util = require('util');

var Writable = stream.Writable;

var MyStream = function (options) {
  Writable.call(this, options);
  // ...
};

util.inherits(MyStream, Writable);

MyStream.prototype._write = function (chunk, encoding, callback) {
  // ...
  // callback();
};
