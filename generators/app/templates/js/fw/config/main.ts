/**
 *  Entrance of config
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

import router = require('./RouterConfig');
import sso = require('./SSOConfig');

export =[router, sso];
