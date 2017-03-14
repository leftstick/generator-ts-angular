import { IRoute } from '../interfaces/IFeature';

import features from '../../features';

export default function ($locationProvider: angular.ILocationProvider, $routeProvider: angular.route.IRouteProvider) {
    'ngInject';

    const routes: IRoute[] = _getRoutes();

    const defaultRoute: IRoute = _getDefaultRoute(routes);
    _startupWarning(routes);

    //config each router
    routes.forEach(function (ro) {
        $routeProvider
            .when(ro.when, ro);
    });

    //config default page
    $routeProvider.otherwise({
        redirectTo: defaultRoute.when
    });

    <% if (answers.pushState) { %>
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
    }); <% } else { %>
    $locationProvider.html5Mode(false); <% } %>
};


function _getRoutes(): IRoute[] {
    return features
        .map(feature => feature.routes)
        .reduce((p, c) => p.concat(c), []);
}

function _getDefaultRoute(routes: IRoute[]): IRoute {
    const userSpecified = routes.find(route => route.isDefault);
    return userSpecified || routes[0];
}

function _startupWarning(routes: IRoute[]) {
    const routeWhens: string[] = routes.map(r => r.when).sort();

    for (let i = 0; i < routeWhens.length - 1; i++) {
        if (routeWhens[i] === routeWhens[i + 1]) {
            throw new Error('Duplicated Route: [ ' + routeWhens[i] + ' ]');
        }
    }
}
