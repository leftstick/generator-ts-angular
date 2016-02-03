/**
 *  Defines the TodosController controller
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

class TodosController {

    /*@ngInject*/
    constructor($scope, TodosService) {
        this.$scope = $scope;
        this.TodosService = TodosService;

        this._init_();
        this._destroy_();
    }

    _init_() {
    }

    _destroy_() {
        this.$scope.$on('$destroy', function() {
            console.log('asdfsafa');
        });
    }
}

export default TodosController;
