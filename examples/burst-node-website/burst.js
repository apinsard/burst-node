'use strict';

var burst = require('../..');

if (require.main === module) {
  burst.load(require('./settings'));
  burst.start();
}

module.exports = burst;
