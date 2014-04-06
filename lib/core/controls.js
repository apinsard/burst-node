'use strict';

var path = require('path');
var fs   = require('fs');

exports.list = {};
exports.loaded = false;

function register(app_name, name, control) {
  control.prototype.init = function Control_init(req, res) {
    this.req = req;
    this.res = res;
  };
  if (!(app_name in exports.list))
    exports[app_name] = {};
  exports.list[app_name][name] = control;
}

/**
 * Load - Load all controls of each app.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Once loaded, each control is stored into `core.controls.list`.
 * Parameters:
 *  - cfg <Object>          : Current project configuration.
 *  - force [boolean=false] : Force to load even if it has already.
 */
exports.load = function Burst_Core_Controls_load(cfg, force) {
  if (exports.loaded && !force) return;
  exports.loaded = true;

  var apps = ['core'].concat(cfg.APPS);
  for (var i=0; i<apps.length; i++) {
    var app_controls_dir = path.join(cfg.PROJECT_DIR, apps[i], 'controls');
    exports.list[apps[i]] = {};
    fs.readdir(app_controls_dir, (function handleReaddirGen(app_controls_dir, app_name) {
        return function handleReaddir(err, files) {
          if (err) throw err;
          for (var i=0; i<files.length; i++) {
            var file = files[i].split('.');
            if (file.length === 2 && file[1] === 'js') {
              var control = require(path.join(app_controls_dir, files[i]));
              register(app_name, file[0], control);
            }
          }
        };
    })(app_controls_dir, apps[i]));
  }
};

