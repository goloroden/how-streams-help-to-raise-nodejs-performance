'use strict';

var stream = require('stream'),
    util = require('util');

var Readable = stream.Readable;

var isPrime = function (n) {
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

var Primes = function (max, options) {
  options = options || {};
  options.objectMode = true;

  Readable.call(this, options);
  this._max = max;
  this._index = 2;
};

util.inherits(Primes, Readable);

Primes.prototype._read = function () {
  var foundPrime = false;

  do {
    if (this._index > this._max) {
      this.push(null);
      return;
    }
    if (isPrime(this._index)) {
      foundPrime = true;
      this.push(this._index);
    }
    this._index++;
  } while(!foundPrime);
};

var primes = new Primes(100);
primes.on('data', function (data) {
  console.log(data);
});
