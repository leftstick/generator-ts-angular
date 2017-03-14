import * as S from './application.css';

export const application: angular.IComponentOptions = {
    template: `
        <div ng-view autoscroll="true" class="${S['application']}"></div>
    `,
    controller: class implements angular.IController {
        constructor() { }
    }
};
