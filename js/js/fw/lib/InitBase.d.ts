import FeatureBase = require('./FeatureBase');
declare class InitBase {
    features: Array<FeatureBase>;
    constructor(features: Array<FeatureBase>);
    execute(): void;
}
export = InitBase;
