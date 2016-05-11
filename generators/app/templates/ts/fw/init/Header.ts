/**
 *  HeadInit set all needed head info to the index.html.
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */

import InitBase from '../lib/InitBase';
import * as angular from 'angular';
import __config from '../../../etc/config';

class Initializer extends InitBase {

    head: angular.IAugmentedJQuery;

    constructor(features) {
        super(features);
        this.head = angular.element(document.head);
    }

    meta(attr): void {
        var meta = angular.element('<meta>');
        meta.attr(attr);
        this.head.append(meta);
    }

    execute(): void {
        this.meta({ 'charset': 'utf-8' });
        this.meta({
            'name': 'viewport',
            'content': 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1.0, user-scalable=yes, minimal-ui'
        });
        this.meta({ 'name': 'renderer', 'content': 'webkit' });
        this.meta({
            'http-equiv': 'X-UA-Compatible',
            'content': 'IE=edge,chrome=1'
        });
        this.meta({
            'name': 'apple-mobile-web-app-capable',
            'content': 'yes'
        });
        this.meta({
            'name': 'apple-mobile-web-app-capable',
            'content': 'yes'
        });
    }
}

export default Initializer;
