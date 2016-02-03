/**
 * ******************************************************************************************************
 *
 *   Defines a home feature
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 * ******************************************************************************************************
 */
'use strict';
import FeatureBase = require('../../fw/lib/FeatureBase');
import Routes = require('./Routes');
import TodosController = require('./controller/TodosController');
import TodosService = require('./service/TodosService');

class Feature extends FeatureBase {

    constructor() {
        super('todos');
        this.routes = Routes;
    }

    execute() {
        this.controller('TodosController', TodosController);
        this.service('TodosService', TodosService);
    }
}

export = Feature;
