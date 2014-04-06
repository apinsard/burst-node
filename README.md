burst-node
==========

Node.js Web Framework

The project is currently at the very beginning. The only test that can be done
is :

    cd examples/burst-node-website
    node burst.js

Then go to http://127.0.0.1:8080. You should see logs in the console.

Description
-----------

The goal of burst-node is to provide a complete webframework where the client
and the server are closely linked.

Features implemented
--------------------

 * Controller "prerender" (called before page rendering)
 * Controller "postrender" (called after the page is sent to the client)

Features to be implemented
--------------------------

 * Routing
 * Views rendering (template engines management)
 * Resources management (images, stylesheets, scripts, ...)
 * ORM
 * Websockets management (through socket.io)
 * Forms (client/server sides)
 * Automatic admin interface (CRUD)
 * I18n / L10n
