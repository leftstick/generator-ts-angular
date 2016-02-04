import InternalService = require('../../../fw/service/InternalService');
import TodosService = require('../service/TodosService');
import Todo = require('../model/Todo');
declare class TodosController {
    $scope: angular.IScope;
    TodosService: TodosService;
    utils: InternalService;
    todolist: Array<Todo>;
    statusFilter: Object;
    remainingCount: number;
    filter: string;
    editedTodo: Todo;
    newTodo: string;
    constructor($scope: angular.IScope, TodosService: TodosService, utils: InternalService);
    _init_(): void;
    onTodosChanged(): void;
    addTodo(): void;
    editTodo(todo: any): void;
    doneEditing(todo: Todo): void;
    removeTodo(todo: Todo): void;
    markAll(checked: boolean): void;
    toggleFilter(e: any, filter: any): void;
    clearDoneTodos(): void;
    _destroy_(): void;
}
export = TodosController;
