import * as S from './todos.css';

import { ITodo, IStatusFilter } from '../../interfaces/ITodo';
import { TodoService } from '../../services/TodoService';

export const TodosComponent: angular.IComponentOptions = {
    template: `
        <todo-title></todo-title>
        <div class="${S['todo-content']}">
            <add-todo on-add="$ctrl.onAddTodo(todo)"></add-todo>
            <todo-list ng-if="$ctrl.todoList" list="$ctrl.todoList" filter="$ctrl.statusFilter" on-remove="$ctrl.onRemoveTodo(todo)" on-edit="$ctrl.onEditTodo(todo, newValue)"></todo-list>
            <todo-status ng-if="$ctrl.todoList.length" list="$ctrl.todoList" on-filter-changed="$ctrl.onFilterChanged(filter)" on-clean-completed="$ctrl.onCleanCompleted()"></todo-status>
        </div>
        <todo-footer></todo-footer>
    `,
    controller: class implements angular.IController {

        statusFilter: IStatusFilter = {};
        todoList: ITodo[];

        /*@ngInject*/
        constructor(private TodoService: TodoService) { }

        $onInit() {
            this
                .TodoService
                .getInitTodos()
                .then(data => {
                    this.todoList = data;
                });
        }

        onAddTodo(todo: string) {
            this.todoList.push({
                title: todo,
                completed: false
            });
        }

        onRemoveTodo(todo: ITodo) {
            this.todoList = this.todoList.filter(t => t.title !== todo.title);
        }

        onEditTodo(todo: ITodo, newValue: ITodo) {
            this.todoList = this.todoList.map(t => {
                return t.title !== todo.title ? t : {
                    title: newValue.title,
                    completed: newValue.completed
                };
            });
        }

        onFilterChanged(filter: string) {
            this.statusFilter = !filter ? {} : filter === 'active' ? { completed: false } : { completed: true };
        }

        onCleanCompleted() {
            this.todoList = this.todoList.filter(t => !t.completed);
        }
    }
};
