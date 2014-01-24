'use strict';

var stream = require('stream'),
    util = require('util');

var Readable = stream.Readable;

var MyStream = function (options) {
  Readable.call(this, options);
  // ...
};

util.inherits(MyStream, Readable);

MyStream.prototype._read = function (size) {
  // this.push(...);
  // this.push(null);
};
