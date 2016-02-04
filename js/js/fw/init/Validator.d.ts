import InitBase = require('../lib/InitBase');
declare class Initializer extends InitBase {
    constructor(features: any);
    execute(): void;
}
export = Initializer;
