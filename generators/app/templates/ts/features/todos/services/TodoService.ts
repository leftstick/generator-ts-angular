import { ITodo } from '../interfaces/ITodo';

export class TodoService {

    /*@ngInject*/
    constructor(private $q: angular.IQService) { }

    getInitTodos(): angular.IPromise<Array<ITodo>> {
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
