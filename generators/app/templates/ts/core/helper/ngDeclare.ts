import * as angular from 'angular';

import { IFeature, ICompose } from '../interfaces/IFeature';

export function registerFeature(feature: IFeature) {
    const module = angular.module(feature.name, []);

    ['component', 'directive', 'service', 'factory', 'filter', 'value']
        .forEach(key => {
            register(module, feature, key);
        });
}

export function registerCommon(app: angular.IModule, feature: ICompose) {

    ['component', 'directive', 'service', 'factory', 'filter', 'value']
        .forEach(key => {
            register(app, feature, key);
        });
}



function register(module: angular.IModule, feature: ICompose, key: string) {
    if (feature[key]) {
        const names = Object.keys(feature[key]);
        names.forEach(n => {
            module[key](n, feature[key][n]);
        });
    }
}

