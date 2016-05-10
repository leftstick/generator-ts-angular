/**
 *  Gets the property value of path from all elements in collection.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */

import * as ng from 'angular';

var {isArray} = ng;

var pluck = function(arr: Array<Object>, key: string): Array<string> {
    if (!isArray(arr) || arr.length === 0) {
        return [];
    }
    if (!key) {
        return [];
    }
    return arr.map(function(a) {
        return a[key];
    });
};

export default pluck;
