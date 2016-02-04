import FeatureBase = require('../../../fw/lib/FeatureBase');
declare class Feature extends FeatureBase {
    constructor();
    indicator($rootScope: any, Routes: any): void;
    execute(): void;
}
export = Feature;
