
export const autofocus: angular.IDirectiveFactory = function (): angular.IDirective {
    return {
        restrict: 'A',
        link: function ($scope: angular.IScope, element: angular.IAugmentedJQuery) {
            element[0].focus();
        }
    };
};
