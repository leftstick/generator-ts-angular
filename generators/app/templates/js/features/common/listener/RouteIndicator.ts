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

class Feature extends FeatureBase {

    constructor() {
        super('RouteIndicatorModule');
    }

    indicator($rootScope, Routes) {
        'ngInject';

        var $body = ng.element(document.body);
        var classes = pluck(Routes, 'id').join(' ');

        $rootScope.$on('$routeChangeSuccess', function(e, route) {
            $body.removeClass(classes);
            if (route && route.$$route && route.$$route.id) {
                $body.addClass(route.$$route.id);
            }
        });
    }

    execute() {
        this.run(this.indicator);
    }
}

export default Feature;
