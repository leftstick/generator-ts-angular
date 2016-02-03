/**
 *
 *  Defines `utils` service
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
import ServiceBase = require('../lib/ServiceBase');
import InternalService = require('./InternalService');

class Service extends ServiceBase {
    constructor(features, app) {
        super(features, app);
    }

    execute(): void {
        this.service('utils', InternalService);
    }
}

export = Service;
