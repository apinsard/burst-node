'use strict';

var path = require('path');
var fs = require('fs');

exports.list = {};
exports.loaded = false;

/**
 * Load - Load all models of each app.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Once loaded, each model is stored into `core.models.list`.
 * Parameters:
 *  - cfg <Object>          : Current project configuration.
 *  - force [boolean=false] : Force to load even if it has already.
 */
exports.load = function Burst_Core_Models_load(cfg, force) {
  if (exports.loaded && !force) return;
  exports.loaded = true;

  var apps = ['core'] + cfg.APPS;
  for (var i=0; i<apps.length; i++) {
    var app_models_dir = path.join(cfg.PROJECT_DIR, apps[i], 'models');
    fs.readdir(app_models_dir, (function handleReaddirGen(app_models_dir) {
        return function handleReaddir(err, files) {
          if (err) throw err;
          for (var j=0; j<files.length; j++) {
            var file = files[j].split('.');
            if (file.length === 2 && file[1] === 'js')
              exports.list[file[0]] = require(path.join(app_models_dir, files[j]));
          }
        };
    })(app_models_dir));
  }
};

