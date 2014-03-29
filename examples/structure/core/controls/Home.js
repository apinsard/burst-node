'use strict';

//var burst = require('burst-node');
//var controls = burst.core.controls;

/**
 * Home - Home page controller
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * The constructor, defined by Burst-Node core, inits two instance attributes:
 *  - in  <BurstRequest> : a burst wrapper for `HttpRequest`
 *  - out <BurstResponse>: a burst wrapper for `HttpResponse`
 */
var Home = {};

/**
 * Prerender - Executed before page rendering
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Proceed only actions required for page rendering.
 */
Home.prototype.prerender = function Home_prerender() {

};

/**
 * Postrender - Executed once the page is rendered
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Proceed actions that are not required for page rendering, such as database
 * insertions or statistic-purpose actions. The `out` attribute is no more
 * available because the response was already sent to the client.
 */
Home.prototype.postrender = function Home_postrender() {

};

module.exports = Home;
