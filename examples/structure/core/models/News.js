'use strict';

var burst = require('burst-node');
var fields = burst.core.fields;

var News = {

  title: {
    type: 'text',
    max_length: 50,
    min_length: 6,
  },

  slug: {
    type: 'slug',
    max_length: 50,
    min_length: 6,
    empty: fields.slugify('title'),
  },

  author: {
    type: 'text',
    max_length: 30,
    min_length: 3,
    allow_null: true,
  },

  date: {
    type: 'date',
    empty: fields.now(),
  },

  content: {
    type: 'text',
    empty: null,
  },

  views: {
    type: 'integer',
    min: 0,
    max: 1e9,
    empty: 0,
  }

};

News.prototype.info = function News_info() {
  var info = "By "+ this.author + " ";
  info += "on "+ this.date +", ";
  info += "viewed "+ this.views +" times.";
  return info;
};

module.exports = News;

