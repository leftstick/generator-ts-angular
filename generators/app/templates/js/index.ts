/**
 *  index.js launch the application.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
require.ensure(['splash-screen/splash.min.css', 'splash-screen'], function(require) {
    (<any>require('splash-screen/splash.min.css')).use();
    (<any>require('splash-screen')).enable('circular');
});

require.ensure(['./main'], function(require) {

    var App = (<any>require('./main'));
    (new App()).run();
});
