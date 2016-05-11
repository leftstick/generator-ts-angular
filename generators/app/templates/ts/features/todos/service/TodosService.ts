/**
 *  Defines the TodosService
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */


import InternalService from '../../../fw/service/InternalService';
import Todo from '../model/Todo';

class TodosService {

    /*@ngInject*/
    constructor(public $q: angular.IQService) {
    }

    getInitTodos(): angular.IPromise<Array<Todo>> {
        return this.$q.resolve([
            {
                title: 'Learn AngularJS',
                completed: true
            },
            {
                title: 'Learn TypeScript',
                completed: false
            },
            {
                title: 'Learn gulp',
                completed: true
            },
            {
                title: 'Learn webpack',
                completed: false
            }
        ]);
    }
}

export default TodosService;
