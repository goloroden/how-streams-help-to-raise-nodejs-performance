'use strict';

var stream = require('stream'),
    util = require('util');

var Transform = stream.Transform;

var MyStream = function (options) {
  Transform.call(this, options);
  // ...
};

util.inherits(MyStream, Transform);

MyStream.prototype._transform = function (chunk, encoding, callback) {
  // this.push(...);
  // callback();
};
