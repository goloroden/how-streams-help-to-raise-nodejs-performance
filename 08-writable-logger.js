'use strict';

var stream = require('stream'),
    util = require('util');

var Writable = stream.Writable;

var Logger = function (options) {
  Writable.call(this, options);
  this._index = 0;
};

util.inherits(Logger, Writable);

Logger.prototype._write = function (chunk, encoding, callback) {
  var message = {
    index: this._index++,
    timestamp: new Date().getTime(),
    message: chunk.toString('utf8')
  };

  console.log(message);
  callback();
};

var logger = new Logger();
logger.write('Hello');
logger.write('World');
