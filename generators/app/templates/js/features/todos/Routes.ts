/**
 *
 *  Routes module expose route information used in home feature
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

import tpl = require('./partials/todos.html');

export =[
    {
        id: 'todos',
        isDefault: true,
        when: '/todos',
        controller: 'TodosController',
        controllerAs: 'todos',
        template: tpl
    }
];
