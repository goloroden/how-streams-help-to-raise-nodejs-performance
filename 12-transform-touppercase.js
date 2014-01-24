'use strict';

var stream = require('stream'),
    util = require('util');

var Transform = stream.Transform;

var ToUpperCase = function (options) {
  Transform.call(this, options);
};

util.inherits(ToUpperCase, Transform);

ToUpperCase.prototype._transform = function (chunk, encoding, callback) {
  var text = chunk.toString('utf8');
  this.push(text.toUpperCase(), 'utf8');
  callback();
};

var toUpperCase = new ToUpperCase();
toUpperCase.on('data', function (data) {
  console.log(data.toString('utf8'));
});
toUpperCase.write('Hello world!');
