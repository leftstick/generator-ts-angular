import FeatureBase = require('./fw/lib/FeatureBase');
declare class App {
    appName: string;
    features: Array<FeatureBase>;
    depends: Array<string>;
    app: angular.IModule;
    constructor();
    findDependencies(): void;
    beforeStart(): void;
    createApp(): void;
    configApp(): void;
    registerService(): void;
    destroySplash(): void;
    launch(): void;
    run(): void;
}
export = App;
