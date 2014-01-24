'use strict';

var copy = function (source, target) {
  source.on('data', function (data) {
    var directWrite = target.write(data);
    if (!directWrite) {
      source.pause();
      target.once('drain', function () {
        source.resume();
      });
    }
  });

  source.on('end', function () {
    target.end();
  });
};
