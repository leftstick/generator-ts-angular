/**
 *  index.js launch the application.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */

require.ensure(['splash-screen/splash.min.css', 'splash-screen'], function(require) {
    (<any>require('splash-screen/splash.min.css')).use();
    (<any>require('splash-screen')).enable('circular');
});

require.ensure(['../css/main.css', './main'], function(require) {

    (<any>require('../css/main.css')).use();

    var App = (<any>require('./main'));
    (new App()).run();
});
