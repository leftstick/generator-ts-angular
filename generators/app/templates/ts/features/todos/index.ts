import { IFeature } from '../../core/interfaces/IFeature';

import { routes } from './route';
import { TodosComponent } from './components/todos';
import { TitleComponent } from './components/todos/subs/todoTitle';
import { AddTodoComponent } from './components/todos/subs/addToto';
import { TodoListComponent } from './components/todos/subs/todoList';
import { TodoStatusComponent } from './components/todos/subs/todoStatus';
import { TodoFooterComponent } from './components/todos/subs/todoFooter';

import { TodoService } from './services/TodoService';

export const Todos: IFeature = {
    name: 'todos',
    routes,
    component: {
        todos: TodosComponent,
        todoTitle: TitleComponent,
        addTodo: AddTodoComponent,
        todoList: TodoListComponent,
        todoStatus: TodoStatusComponent,
        todoFooter: TodoFooterComponent
    },
    service: {
        TodoService
    }
};
