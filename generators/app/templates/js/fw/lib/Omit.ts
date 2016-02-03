/**
 *  This method creates an object composed of the own and inherited enumerable properties of object
 *  that are not omitted.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

import { isObject, isArray, isString } from 'angular';

var clone = function(obj: Object) {
    if (typeof obj !== 'object' || !obj) {
        return obj;
    }
    var copy = {};
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) {
            copy[attr] = obj[attr];
        }
    }
    return copy;
};

var omit = function(obj: Object, keys: Array<string>): Object {
    if (!isObject(obj)) {
        return obj;
    }
    if (isArray(keys) && keys.length === 0) {
        return obj;
    }
    if (isString(keys) && !keys) {
        return obj;
    }
    if (!isString(keys) && !isArray(keys)) {
        return obj;
    }
    var o = clone(obj);
    keys.forEach(function(key) {
        delete o[key];
    });
    return o;
};

export default omit;
