/**
 *  SSOConfig set authorised configuration.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
import ConfiguratorBase = require('../lib/ConfiguratorBase');

class Configurator extends ConfiguratorBase {
    constructor(features, app) {
        super(features, app);
    }

    httpConfig($httpProvider: angular.IHttpProvider): void {
        'ngInject';

        $httpProvider.defaults.headers.common['Accept'] = 'application/json;charset=utf-8';
        $httpProvider.defaults.withCredentials = true;
    }

    execute(): void {
        this.config(this.httpConfig);
    }
}

export = Configurator;
