/**
 *  Defines the TodosController controller
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

import InternalService = require('../../../fw/service/InternalService');
import TodosService = require('../service/TodosService');
import Todo = require('../model/Todo');

class TodosController {

    todolist: Array<Todo> = [];
    statusFilter: Object = {};
    allChecked: boolean = false;
    remainingCount: number = 0;
    doneCount: number = 0;
    filter: string = '';
    editedTodo: Todo;
    newTodo: string = '';

    /*@ngInject*/
    constructor(public $scope: angular.IScope, public TodosService: TodosService, public utils: InternalService) {
        this._init_();
        this._destroy_();
    }

    _init_() {
        this.$scope['todolist'] = this.todolist;
        this.TodosService.getInitTodos()
            .success(data => this.todolist.push(...data));

        this.$scope.$watch('todolist', this.onTodosChanged.bind(this), true);
    }

    onTodosChanged() {
        this.remainingCount = this.todolist.filter((todo) => !todo.completed).length;
        this.doneCount = this.todolist.length - this.remainingCount;
        this.allChecked = !this.remainingCount;
    }

    addTodo() {
        this.todolist.push({
            title: this.newTodo,
            completed: false
        });
        this.newTodo = '';
    }

    editTodo(todo) {
        this.editedTodo = todo;
    }

    doneEditing(todo: Todo) {
        this.editedTodo = undefined;
        if (!todo.title.trim()) {
            this.removeTodo(todo);
        }
    }

    removeTodo(todo: Todo) {
        this.$scope['todolist'] = this.todolist = this.todolist.filter((t) => t !== todo);
    }

    markAll(checked: boolean) {
        this.todolist.forEach(todo => { todo.completed = checked; });
    }

    toggleFilter(e, filter) {
        this.utils.stopEvent(e);
        this.filter = filter;
        this.statusFilter = !filter ? {} : filter === 'active' ? { completed: false } : { completed: true };
    }

    clearDoneTodos() {
        this.$scope['todolist'] = this.todolist = this.todolist.filter((todo) => !todo.completed);
    }

    _destroy_() {
        this.$scope.$on('$destroy', function() {
            console.log('asdfsafa');
        });
    }
}

export = TodosController;
