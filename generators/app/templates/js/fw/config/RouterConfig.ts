/**
 *  RouterConfig collect route information from each feature and combine them
 *  with ngRoute.
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
import ConfiguratorBase = require('../lib/ConfiguratorBase');
import pluck = require('../lib/Pluck');
import omit = require('../lib/Omit');
import Route = require('../lib/Route');

class Configurator extends ConfiguratorBase {

    routes: Array<Route>;

    constructor(features, app) {
        super(features, app);
    }

    routeConfig($locationProvider: angular.ILocationProvider, $routeProvider: angular.route.IRouteProvider): void {
        //config each router
        this.routes.forEach((ro) => $routeProvider.when(ro.when, omit(ro, ['when'])));

        //config default page
        var defaultRouter = this.routes.filter((route) => route.isDefault)[0];
        if (defaultRouter) {
            $routeProvider.otherwise({
                redirectTo: defaultRouter.when
            });
        }
        <% if (answers.pushState) { %>
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: true
            }); <% } else { %>
                $locationProvider.html5Mode(false); <% } %>
    }

    execute(): void {
        if (!this.features || this.features.length === 0) {
            console.warn('No features loaded');
            return;
        }

        this.routes = this.features
            .filter((feature) => feature.routes && feature.routes.length > 0)
            .map((feature) => feature.routes)
            .reduce((previous, current) => previous.concat(current), []);

        var defaultRoutes = this.routes.filter((route) => route.isDefault);

        if (defaultRoutes.length === 0) {
            console.warn('There is no any default route set. Try setting isDefault to the route you preferred');
        } else if (defaultRoutes.length > 1) {
            var defaultWhens = pluck(defaultRoutes, 'when');
            console.warn('You have set [' + defaultRoutes.length + '] default routes, they are [' + defaultWhens.join(', ') + ']. Try to correct it');
        }

        var routeWhens = pluck(this.routes, 'when').sort();

        for (var i = 0; i < routeWhens.length - 1; i++) {
            if (routeWhens[i] === routeWhens[i + 1]) {
                throw new Error('Duplicated Route: [ ' + routeWhens[i] + ' ]');
            }
        }

        this.constant('Routes', this.routes);

        var routeConfig = this.routeConfig.bind(this);
        routeConfig.$inject = ['$locationProvider', '$routeProvider'];

        this.config(routeConfig);
    }
}

export = Configurator;