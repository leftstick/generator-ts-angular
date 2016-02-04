import FeatureBase = require('./FeatureBase');
declare class ServiceBase {
    features: Array<FeatureBase>;
    app: angular.IModule;
    factory: (factoryName: string, Function) => any;
    service: (serviceName: string, Function) => any;
    constructor(features: Array<FeatureBase>, app: angular.IModule);
    execute(): void;
}
export = ServiceBase;
