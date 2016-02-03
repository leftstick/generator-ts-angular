/**
 *  main.js manage the whole application.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
import ng = require('angular');
import Initializers = require('./fw/init/main');
import Extensions = require('./fw/ext/main');
import Configurators = require('./fw/config/main');
import Services = require('./fw/service/main');
import Features = require('./features/main');
import Splash = require('splash-screen');

import FeatureBase = require('./fw/lib/FeatureBase');

class App {

    appName: string;
    features: Array<FeatureBase>;
    depends: Array<string>;
    app: angular.IModule;

    constructor() {
        this.appName = '<%= answers.name %>';
        Features.forEach(function(Feature) {
            this.push(new Feature());
        }, this.features = []);
    }

    findDependencies() {
        this.depends = Extensions.slice(0);

        var featureNames = this.features
            .filter(feature => !!feature.export)
            .map(feature => feature.export);

        this.depends.push(...featureNames);
    }

    beforeStart() {
        Initializers.forEach(function(Initializer) {
            (new Initializer(this.features)).execute();
        }, this);

        this.features.forEach(feature => feature.beforeStart());
    }

    createApp() {
        this.features.forEach(feature => feature.execute());

        this.app = ng.module(this.appName, this.depends);
    }

    configApp() {
        Configurators.forEach(function(Configurator) {
            (new Configurator(this.features, this.app)).execute();
        }, this);
    }

    registerService() {
        Services.forEach(function(Service) {
            (new Service(this.features, this.app)).execute();
        }, this);
    }

    destroySplash(): void {
        var _this = this;
        Splash.destroy();
        (<any>require('splash-screen/splash.min.css')).unuse();
        setTimeout(function() {
            if (Splash.isRunning()) {
                _this.destroySplash();
            }
        }, 100);
    }

    launch() {
        ng.bootstrap(document, [this.appName]);
    }

    run(): void {
        this.findDependencies();
        this.beforeStart();
        this.createApp();
        this.configApp();
        this.registerService();
        this.destroySplash();
        this.launch();
    }

}

export = App;
