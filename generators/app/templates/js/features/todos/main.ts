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

import FeatureBase from '../../fw/lib/FeatureBase';
import Routes from './Routes';
import TodosController from './controller/TodosController';
import TodosService from './service/TodosService';

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

export default Feature;
