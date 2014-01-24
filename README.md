# How streams help to raise Node.js performance

This repository contains the (slightly updated) samples for my talk [How streams help to raise Node.js performance](http://www.youtube.com/watch?v=QgEuZ52OZtU) at [MNUG](http://mnug.de/) in December 2013.

## Samples

### Delivering files

1. [Not using streams](01-server-classic.js)
2. [Using a file streams](02-server-stream.js)
3. [Using a file and a gzip stream](03-server-gzip.js)

### Copying streams

4. [Piping manually](04-stream-copy.js)

### Implementing readable streams

5. [Creating readable streams](05-template-readable.js)
6. [Calculating primes numbers](06-readable-primes.js)

### Implementing writable streams

7. [Creating writable streams](07-template-writable.js)
8. [Logging messages](08-writable-logger.js)
9. [Logging messages with metadata](09-writable-logger-extended.js)

### Implementing duplex streams

10. [Creating duplex streams](10-template-duplex.js)

### Implementing transform streams

11. [Creating transform streams](11-template-transform.js)
12. [Transforming to upper case](12-transform-touppercase.js)
13. [Transforming to reverse](13-transform-reverse.js)
14. [Transforming while passing](14-transform-getlength.js)

## License

The MIT License (MIT)
Copyright (c) 2013-2014 Golo Roden.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
