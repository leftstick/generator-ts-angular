/**
 *  Entrance of features
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */

import todos from './todos/main';
import common from './common/main';

export default [todos, ...common];
