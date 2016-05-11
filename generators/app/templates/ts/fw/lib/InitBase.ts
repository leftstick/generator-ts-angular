/**
 *  InitBase class
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */

import FeatureBase from './FeatureBase';

class InitBase {

    constructor(public features: Array<FeatureBase>) {
    }

    execute(): void {
    }
}

export default InitBase;
