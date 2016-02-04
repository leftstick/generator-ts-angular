/**
 *  Entrance of features
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

import todos = require('./todos/main');
import common = require('./common/main');

export =[todos, ...common];
