import * as angular from 'angular';

import { registerFeature, registerCommon } from './core/helper/ngDeclare';

import Dependencies from './core/externals';
import Configurations from './core/configurations';

import { commons } from './features/common';
import Features from './features';

import { application } from './application';

class Application {

    appName: string = '<%= answers.name %>';
    app: angular.IModule;
    depends: string[];

    constructor() {
        this.depends = [...Dependencies, ...Features.map(feature => (registerFeature(feature), feature.name))];

    }

    createApp() {
        this.app = angular.module(this.appName, this.depends);
        registerCommon(this.app, commons);
        this.app.component('application', application);
    }

    configApp() {
        Configurations.forEach(c => {
            this.app.config(c);
        });
    }

    destroySplash() {
        document.head.removeChild(document.querySelector('#style-spinner'));
        document.body.removeChild(document.querySelector('.el-spinner'));
    }

    launch() {
        angular.bootstrap(document, [this.appName]);
    }

    run() {
        this.createApp();
        this.configApp();
        this.destroySplash();
        this.launch();
    }
}

new Application().run();
