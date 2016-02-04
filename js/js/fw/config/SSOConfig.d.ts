import ConfiguratorBase = require('../lib/ConfiguratorBase');
declare class Configurator extends ConfiguratorBase {
    constructor(features: any, app: any);
    httpConfig($httpProvider: angular.IHttpProvider): void;
    execute(): void;
}
export = Configurator;
