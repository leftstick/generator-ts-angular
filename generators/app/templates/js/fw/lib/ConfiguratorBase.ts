/**
 *  ConfiguratorBase class
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
import FeatureBase = require('../lib/FeatureBase');

class ConfiguratorBase {

    config: (Function) => any;
    constant: (constantName: string, Function) => any;
    value: (constantName: string, Function) => any;

    constructor(public features: Array<FeatureBase>, public app: angular.IModule) {
        this.config = app.config;
        this.constant = app.constant;
        this.value = app.value;
    }

    execute(): void {
    }
}

export = ConfiguratorBase;
