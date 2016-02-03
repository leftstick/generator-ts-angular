/**
 *  Entrance of init
 *
 *  Note: this module is part of application-level framework, developers should
 *  never touch this module
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

import header = require('./Header');
import validator = require('./Validator');

export =[header, validator];
