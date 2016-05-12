/**
 *
 *  Routes module expose route information used in todos feature
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */

var tpl = (<string>require('./partials/todos.html'));

import Route from '../../fw/lib/Route';

const routes: Route[] = [{
    id: 'todos',
    isDefault: true,
    when: '/todos',
    controller: 'TodosController',
    controllerAs: 'todos',
    template: tpl
}];

export default routes;
