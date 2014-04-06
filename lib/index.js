'use strict';

var core = exports.core = require('./core');

exports.load = function Burst_load(cfg) {
  //core.models.load(cfg);
  core.controls.load(cfg);
  core.routes.load(cfg);
};

exports.start = function Burst_start() {
  core.server.run();
};
