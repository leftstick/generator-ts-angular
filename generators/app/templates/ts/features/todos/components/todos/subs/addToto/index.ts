import * as S from './addTodo.css';

import { ITodo } from '../../../../interfaces/ITodo';

export const AddTodoComponent: angular.IComponentOptions = {
    template: `
        <form ng-submit="$ctrl.addTodo()">
            <input class="${S['new-todo']}" placeholder="What needs to be done?" ng-model="$ctrl.newTodo" autofocus>
            <input class="${S['toggle-all']}" type="checkbox" ng-checked="$ctrl.isAllCompleted" ng-click="$ctrl.toggleAll($event)">
        </form>
    `,
    bindings: {
        list: '<',
        onAdd: '&',
        onToggleAll: '&'
    },
    controller: class implements angular.IController {

        onAdd: { (todo: { todo: string; }): void; };
        onToggleAll: { (completed: { completed: boolean; }): void; };

        newTodo: string = '';
        isAllCompleted: boolean;

        constructor() { }

        $onChanges(changes: { list: angular.IChangesObject<Array<ITodo>> }) {
            this.isAllCompleted = changes.list.currentValue ? changes.list.currentValue.every(t => t.completed) : false;
        }

        addTodo() {
            this.onAdd({ todo: this.newTodo });
            this.newTodo = '';
        }

        toggleAll(e: MouseEvent) {
            this.onToggleAll({ completed: (<HTMLInputElement>e.target).checked });
        }

    }
};
