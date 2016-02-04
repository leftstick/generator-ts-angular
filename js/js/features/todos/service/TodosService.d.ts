import InternalService = require('../../../fw/service/InternalService');
import Todo = require('../model/Todo');
declare class TodosService {
    $http: angular.IHttpService;
    utils: InternalService;
    constructor($http: angular.IHttpService, utils: InternalService);
    getInitTodos(): angular.IHttpPromise<Array<Todo>>;
}
export = TodosService;
