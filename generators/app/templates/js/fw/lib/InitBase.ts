/**
 *  InitBase class
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
import FeatureBase from './FeatureBase';

class InitBase {

    constructor(public features: Array<FeatureBase>) {
    }

    execute(): void {
    }
}

export default InitBase;
