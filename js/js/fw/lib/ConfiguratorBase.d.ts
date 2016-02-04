import FeatureBase = require('../lib/FeatureBase');
declare class ConfiguratorBase {
    features: Array<FeatureBase>;
    app: angular.IModule;
    config: (Function) => any;
    constant: (constantName: string, Function) => any;
    value: (constantName: string, Function) => any;
    constructor(features: Array<FeatureBase>, app: angular.IModule);
    execute(): void;
}
export = ConfiguratorBase;
