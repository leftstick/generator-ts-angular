import ServiceBase = require('../lib/ServiceBase');
declare class Service extends ServiceBase {
    constructor(features: any, app: any);
    execute(): void;
}
export = Service;
