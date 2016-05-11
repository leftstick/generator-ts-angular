/**
 *
 *  Defines RouteIndicator service
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

import * as ng from 'angular';
import pluck from '../../../fw/lib/Pluck';
import FeatureBase from '../../../fw/lib/FeatureBase';
import Route from '../../../fw/lib/Route';

class Feature extends FeatureBase {

    constructor() {
        super('RouteIndicatorModule');
    }

    _indicator($rootScope: angular.IRootScopeService, Routes: Route[]) {
        'ngInject';

        var $body = ng.element(document.body);
        var classes = pluck(Routes, 'id').join(' ');

        $rootScope.$on('$routeChangeSuccess', function(e: ng.IAngularEvent, route: any) {
            $body.removeClass(classes);
            if (route && route.$$route && route.$$route.id) {
                $body.addClass(route.$$route.id);
            }
        });
    }

    execute() {
        this.run(this._indicator);
    }
}

export default Feature;
