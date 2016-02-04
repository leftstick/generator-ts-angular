import ConfiguratorBase = require('../lib/ConfiguratorBase');
import Route = require('../lib/Route');
declare class Configurator extends ConfiguratorBase {
    routes: Array<Route>;
    constructor(features: any, app: any);
    routeConfig($locationProvider: angular.ILocationProvider, $routeProvider: angular.route.IRouteProvider): void;
    execute(): void;
}
export = Configurator;
