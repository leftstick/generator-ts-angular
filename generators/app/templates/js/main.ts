/**
 *  main.js manage the whole application.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */

import * as ng from 'angular';
import Initializers from './fw/init/main';
import Extensions from './fw/ext/main';
import Configurators from './fw/config/main';
import Services from './fw/service/main';
import Features from './features/main';
import Splash from 'splash-screen';

import FeatureBase from './fw/lib/FeatureBase';

class App {

    appName: string;
    features: Array<FeatureBase>;
    depends: Array<string>;
    app: angular.IModule;

    constructor() {
        this.appName = 'tss';
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
        Initializers.forEach((Initializer) => (new Initializer(this.features)).execute());

        this.features.forEach(feature => feature.beforeStart());
    }

    createApp() {
        this.features.forEach(feature => feature.execute());

        this.app = ng.module(this.appName, this.depends);
    }

    configApp() {
        Configurators.forEach((Configurator) => (new Configurator(this.features, this.app)).execute());
    }

    registerService() {
        Services.forEach((Service) => (new Service(this.features, this.app)).execute());
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
        ng.bootstrap(document, [this.appName], { strictDi: true });
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
