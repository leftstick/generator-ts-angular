/**
 *  Defines the Autofocus Module.
 *  This module used to override the original `autofocus` attribute since it doesn't work properly with ngRoute
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */

import FeatureBase from '../../../fw/lib/FeatureBase';

class Autofocus extends FeatureBase {

    constructor() {
        super('AutofocusModule');
    }

    _autoFocus() {
        return {
            restrict: 'A',
            link: function($scope: angular.IScope, element: angular.IAugmentedJQuery) {
                element[0].focus();
            }
        };
    }

    execute() {
        this.directive('autofocus', this._autoFocus);
    }
}

export default Autofocus;
