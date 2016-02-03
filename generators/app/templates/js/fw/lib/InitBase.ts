/**
 *  InitBase class
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
import FeatureBase = require('./FeatureBase');

class InitBase {

    constructor(public features: Array<FeatureBase>) {
    }

    execute(): void {
    }
}

export = InitBase;
