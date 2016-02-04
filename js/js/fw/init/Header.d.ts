import InitBase = require('../lib/InitBase');
import angular = require('angular');
declare class Initializer extends InitBase {
    head: angular.IAugmentedJQuery;
    constructor(features: any);
    meta(attr: any): void;
    execute(): void;
}
export = Initializer;
