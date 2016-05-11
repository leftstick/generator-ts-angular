/**
 *
 *  Defines `utils` service
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */

import ServiceBase from '../lib/ServiceBase';
import InternalService from './InternalService';

class Service extends ServiceBase {
    constructor(features, app) {
        super(features, app);
    }

    execute(): void {
        this.service('utils', InternalService);
    }
}

export default Service;
