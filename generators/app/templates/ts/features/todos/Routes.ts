/**
 *
 *  Routes module expose route information used in todos feature
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */

var tpl = (<string>require('./partials/todos.html'));

export default [
    {
        id: 'todos',
        isDefault: true,
        when: '/todos',
        controller: 'TodosController',
        controllerAs: 'todos',
        template: tpl
    }
];
