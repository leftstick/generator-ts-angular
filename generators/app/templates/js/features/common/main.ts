/**
 *  Entrance of common stuff
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */

import dirs from './directive/main';
import listeners from './listener/main';

export default [...dirs, ...listeners];
