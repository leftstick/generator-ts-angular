import FeatureBase = require('../../../fw/lib/FeatureBase');
declare class Autofocus extends FeatureBase {
    constructor();
    autoFocus(): {
        restrict: string;
        link: ($scope: any, element: any) => void;
    };
    execute(): void;
}
export = Autofocus;
