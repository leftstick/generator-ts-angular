/**
 *  Defines the TodosController controller
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
import * as angular from 'angular';
import InternalService from '../../../fw/service/InternalService';
import TodosService from '../service/TodosService';
import Todo from '../model/Todo';

interface IStatusFilter {
    completed?: boolean
}

interface ITodosScope extends angular.IScope {
    todolist?: Array<Todo>;
}

class TodosController {

    todolist: Array<Todo> = [];
    statusFilter: IStatusFilter = {};
    remainingCount: number = 0;
    filter: string = '';
    editedTodo: Todo;
    newTodo: string = '';

    /*@ngInject*/
    constructor(public $scope: ITodosScope, public TodosService: TodosService, public utils: InternalService) {
        this._init_();
        this._destroy_();
    }

    _init_() {
        this.$scope.todolist = this.todolist;
        this.TodosService
            .getInitTodos()
            .then(data => this.todolist.push(...data));

        this.$scope.$watch('todolist', this.onTodosChanged.bind(this), true);
    }

    onTodosChanged() {
        this.remainingCount = this.todolist.filter((todo) => !todo.completed).length;
    }

    addTodo() {
        if (!this.newTodo) {
            return;
        }
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
        this.$scope.todolist = this.todolist = this.todolist.filter((t) => t !== todo);
    }

    markAll(checked: boolean) {
        this.todolist.forEach(todo => todo.completed = checked);
    }

    toggleFilter(e: MouseEvent, filter: string) {
        this.utils.stopEvent(e);
        this.filter = filter;
        this.statusFilter = !filter ? {} : filter === 'active' ? { completed: false } : { completed: true };
    }

    clearDoneTodos() {
        this.$scope.todolist = this.todolist = this.todolist.filter((todo) => !todo.completed);
    }

    _destroy_() {
        this.$scope.$on('$destroy', () => { });
    }
}

export default TodosController;
