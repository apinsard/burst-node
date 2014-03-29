'use strict';

//var burst = require('burst-node');
//var models = burst.core.models;

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
    slugify: 'title',
  }

  author: {
    type: 'text',
    max_length: 30,
    min_length: 3,
    allow_null: true,
  },

  date: {
    type: 'date',
  },

  content: {
    type: 'text',
  },

  views: {
    type: 'integer',
    min: 0,
    max: 1e9,
    initial: 0,
  }

};

module.exports = News;
