import angular = require('angular');
import Route = require('./Route');
declare class FeatureBase {
    export: string;
    mod: angular.IModule;
    controller: (controllerName: string, Function) => any;
    factory: (factoryName: string, Function) => any;
    service: (serviceName: string, Function) => any;
    directive: (directiveName: string, Function) => any;
    filter: (filterName: string, Function) => any;
    config: (Function) => any;
    run: (Function) => any;
    routes: Array<Route>;
    constructor(name: string);
    beforeStart(): void;
    execute(): void;
}
export = FeatureBase;
