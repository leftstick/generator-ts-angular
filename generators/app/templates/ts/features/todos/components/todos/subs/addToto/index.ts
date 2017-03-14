import * as S from './addTodo.css';

export const AddTodoComponent: angular.IComponentOptions = {
    template: `
        <form ng-submit="$ctrl.addTodo()">
            <input class="${S['new-todo']}" placeholder="What needs to be done?" ng-model="$ctrl.newTodo" autofocus>
            <input class="${S['toggle-all']}" type="checkbox">
        </form>
    `,
    bindings: {
        onAdd: '&'
    },
    controller: class implements angular.IController {
        newTodo: string = '';
        onAdd: Function;

        constructor() { }

        addTodo() {
            this.onAdd({ todo: this.newTodo });
            this.newTodo = '';
        }

    }
};
