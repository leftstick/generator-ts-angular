/**
 *  FeatureBase class
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
import angular = require('angular');
import Route = require('./Route');

class FeatureBase {

    export: string;
    mod: angular.IModule;

    controller: (controllerName: string, Function) => any;
    factory: (factoryName: string, Function) => any;
    service: (serviceName: string, Function) => any;
    directive: (directiveName: string, Function) => any;
    filter: (filterName: string, Function) => any;
    config: (Function) => any;
    run: (Function) => any;

    routes: Array<Route>;

    constructor(name: string) {
        this.export = name;
        this.mod = angular.module(this.export, []);

        this.controller = this.mod.controller;
        this.factory = this.mod.factory;
        this.service = this.mod.service;
        this.directive = this.mod.directive;
        this.filter = this.mod.filter;
        this.config = this.mod.config;
        this.run = this.mod.run;
    }

    beforeStart(): void {
    }

    execute(): void {
    }
}

export = FeatureBase;
