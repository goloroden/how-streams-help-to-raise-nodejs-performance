'use strict';

var stream = require('stream'),
    util = require('util');

var Transform = stream.Transform;

var GetLength = function (options) {
  Transform.call(this, options);
  this._length = 0;
};

util.inherits(GetLength, Transform);

GetLength.prototype._transform = function (chunk, encoding, callback) {
  this._length += chunk.length;
  this.push(chunk);
  callback();
};

GetLength.prototype._flush = function (callback) {
  this.emit('length', this._length);
  callback();
};

var getLength = new GetLength();
getLength.on('length', function (length) {
  console.log(length);
});

getLength.write('Hello ');
getLength.write('world!');
getLength.end();
