'use strict';

var stream = require('stream'),
    util = require('util');

var Transform = stream.Transform;

var Reverse = function (options) {
  Transform.call(this, options);
  this._reversedText = '';
};

util.inherits(Reverse, Transform);

Reverse.prototype._transform = function (chunk, encoding, callback) {
  var text = chunk.toString('utf8');
  this._reversedText = text.split('').reverse().join('') + this._reversedText;
  callback();
};

Reverse.prototype._flush = function (callback) {
  this.push(this._reversedText, 'utf8');
  callback();
};

var reverse = new Reverse();
reverse.on('data', function (data) {
  console.log(data.toString('utf8'));
});
reverse.write('Hello world!');
reverse.end();
