/**
 *  Entrance of common stuff
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

import dirs = require('./directive/main');
import listeners = require('./listener/main');

export =[].concat(dirs).concat(listeners);
