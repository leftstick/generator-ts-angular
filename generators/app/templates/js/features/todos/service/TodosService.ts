/**
 *  Defines the TodosService
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

import InternalService = require('../../../fw/service/InternalService');
import Todo = require('../model/Todo');

class TodosService {

    /*@ngInject*/
    constructor(public $http: angular.IHttpService, public utils: InternalService) {
    }

    getInitTodos(): angular.IHttpPromise<Array<Todo>> {
        return this.$http.get(this.utils.getApi('/GET_initTask.json'));
    }

}

export = TodosService;
