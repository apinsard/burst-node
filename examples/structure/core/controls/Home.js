'use strict';

//var burst = require('burst-node');
//var controls = burst.core.controls;
var News = require('../models/News');

/**
 * Home - Home page controller
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * The constructor, defined by Burst-Node core, inits two instance attributes:
 *  - req <BurstRequest>  : a burst wrapper for `HttpRequest`
 *  - res <BurstResponse> : a burst wrapper for `HttpResponse`
 */
var Home = {};

/**
 * Prerender - Executed before page rendering
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Proceed only actions required for page rendering.
 */
Home.prototype.prerender = function Home_prerender() {
  var news = new News({
    title: 'News example',
    author: 'John Doe',
    content: "Foobar is a foo to make Barfoo fooing like a bar.",
  });

  news.views++;

  this.res.setTitle('Home page');
  this.res.send('news', news);
};

/**
 * Postrender - Executed once the page is rendered
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Proceed actions that are not required for page rendering, such as database
 * insertions or statistic-purpose actions. The `res` attribute is no more
 * available for writting because the response was already sent to the client.
 */
Home.prototype.postrender = function Home_postrender() {
  setTimeout(function() {
    console.log("I am printed five seconds after the page was sent to the"
      + " client.");
  }, 5000)
};

module.exports = Home;

