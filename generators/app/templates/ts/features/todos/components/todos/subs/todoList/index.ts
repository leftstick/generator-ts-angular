import * as S from './todoList.css';

import { ITodo } from '../../../../interfaces/ITodo';

export const TodoListComponent: angular.IComponentOptions = {
	template: `
		<ul class="${S['todo-list']}">
			<li ng-repeat="todo in $ctrl.list | filter: $ctrl.filter track by $index" ng-class="{'${S['completed']}': todo.completed}">
				<div ng-if="todo !== $ctrl.editedTodo">
					<input class="${S['toggle']}" type="checkbox" ng-checked="todo.completed" ng-click="$ctrl.toggleState(todo)">
					<label class="${S['label']}" ng-dblclick="$ctrl.editedTodo = todo">{{ todo.title }}</label>
					<button class="${S['destroy']}" ng-click="$ctrl.removeTodo(todo)"></button>
				</div>
				<form ng-submit="$ctrl.doneEditing(todo, $event)" ng-if="todo === $ctrl.editedTodo">
					<input name="editInput" class="${S['edit']}" value="{{ todo.title }}" ng-blur="$ctrl.editedTodo = undefined" autofocus>
				</form>
			</li>
		</ul>
    `,
	bindings: {
		list: '<',
		filter: '<',
		onRemove: '&',
		onEdit: '&'
	},
	controller: class implements angular.IController {

		onRemove: Function;
		onEdit: Function;

		editedTodo: ITodo;

		constructor() { }

		removeTodo(todo: ITodo) {
			this.onRemove({ todo });
		}

		doneEditing(todo: ITodo, e: KeyboardEvent) {
			this.onEdit({
				todo: todo,
				newValue: {
					title: (<HTMLFormElement>e.target).editInput.value,
					completed: todo.completed
				}
			});
		}

		toggleState(todo: ITodo) {
			this.onEdit({
				todo: todo,
				newValue: {
					title: todo.title,
					completed: !todo.completed
				}
			});
		}

	}
};
