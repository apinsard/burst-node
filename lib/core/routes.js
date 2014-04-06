'use strict';

var path = require('path');
var fs   = require('fs');

exports.list = {};
exports.loaded = false;

/**
 * Load - Load routes of the project
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Once loaded, each route is stored into `core.controls.list`.
 * Parameters:
 *  - cfg <Object>          : Current project configuration.
 *  - force [boolean=false] : Force to load even if it has already.
 */
exports.load = function Burst_Core_Routes_load(cfg, force) {
  if (exports.loaded && !force) return;
  exports.loaded = true;

  exports.list = require(path.join(cfg.PROJECT_DIR, 'routes.js'));
};

exports.match = function Burst_Core_Routes_match(url) {
  for (var name in exports.list) {
    var route = exports.list[name];
    if (typeof route.pattern === 'string' && route.pattern === url
        || route.pattern.match(url))
    {
      return route;
    }
  }
};
