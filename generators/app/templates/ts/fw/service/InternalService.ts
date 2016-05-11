/**
 *
 *  Defines InternalService
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */

import config from '../../../etc/config';

class InternalService {

    constructor() {

    }

    stopEvent(e: Event): void {
        if (!e) {
            return;
        }
        if (e.stopPropagation) {
            e.stopPropagation();
        }
        if (e.preventDefault) {
            e.preventDefault();
        }
    }

    getApi(path: string): string {
        if (!path) {
            return config.api;
        }
        var newPath = path;
        if (path.indexOf('/') === 0) {
            newPath = path.substring(1);
        }
        if (config.api.lastIndexOf('/') === (config.api.length - 1)) {
            return config.api + newPath;
        }
        return config.api + '/' + newPath;
    }

}

export default InternalService;
