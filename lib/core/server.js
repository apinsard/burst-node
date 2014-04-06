'use strict';

var http = require('http');

var routes   = require('./routes');
var controls = require('./controls');

function handleHttpRequest(req, res) {
  var route = routes.match(req.url);
  if (route) {
    var control = new controls.list[route.app][route.control]();
    control.init(req, res);
    control.prerender();
    res.end();
    control.postrender();
  }
}

exports.run = function Server_run() {
  var server = http.createServer(handleHttpRequest);
  server.listen(8080);
}
