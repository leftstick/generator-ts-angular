/**
 *  index.js launch the application.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */

require.ensure(['splash-screen/dist/splash.min.css', 'splash-screen'], function(require) {
    (<any>require('splash-screen/dist/splash.min.css')).use();
    (<any>require('splash-screen')).Splash.enable('circular');
});

require.ensure(['../css/main.css', './main'], function(require) {

    (<any>require('../css/main.css')).use();

    var App = (<any>require('./main')).default;
    (new App()).run();
});
