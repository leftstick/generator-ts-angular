/**
 *  ServiceBase class
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
import FeatureBase from './FeatureBase';

class ServiceBase {

    factory: (factoryName: string, Function) => any;
    service: (serviceName: string, Function) => any;

    constructor(public features: Array<FeatureBase>, public app: angular.IModule) {
        this.factory = app.factory;
        this.service = app.service;
    }

    execute(): void {
    }
}

export default ServiceBase;
