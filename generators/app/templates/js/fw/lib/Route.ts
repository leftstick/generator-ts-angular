/**
 *  Route interface
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
interface Route {
    id: string;
    isDefault: boolean;
    when: string;
    controller: string;
    controllerAs: string;
    template: string;
}

export default Route;
