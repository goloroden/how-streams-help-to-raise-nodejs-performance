'use strict';

var stream = require('stream'),
    util = require('util');

var Writable = stream.Writable;

var Logger = function (options) {
  options = options || {};
  options.objectMode = true;

  Writable.call(this, options);
  this._index = 0;
};

util.inherits(Logger, Writable);

Logger.prototype._write = function (chunk, encoding, callback) {
  var message = {
    index: this._index++,
    timestamp: new Date().getTime(),
    level: chunk.level,
    message: chunk.message,
    metadata: chunk.metadata || {}
  };

  console.log(message);
  callback();
};

var logger = new Logger();
logger.write({ level: 'info', message: 'Hello world!' });
logger.write({ level: 'warn', message: 'Only 10 minutes left.'});
