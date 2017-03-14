import * as angular from 'angular';

export interface IRoute {
    id: string;
    isDefault?: boolean;
    when: string;
    template: string;
}

export interface ICompose {
    component?: { [name: string]: angular.IComponentOptions };
    directive?: { [name: string]: angular.IDirectiveFactory };
    service?: { [name: string]: Function };
    factory?: { [name: string]: Function };
    filter?: { [name: string]: Function };
    value?: { [name: string]: any };
}

export interface IFeature extends ICompose {
    name: string;
    routes: IRoute[];
    component: { [name: string]: angular.IComponentOptions };
}
