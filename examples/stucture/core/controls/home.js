'use strict';

var burst = require('burst-node');
var controls = burst.core.controls;

function Control() {
  controls.Control.call(this, arguments);
  var data = {
    title: 'Home page',
    uri: req.uri,
  };

  res.send(data);
}

module.exports = Control;
