import * as S from './todoTitle.css';

export const TitleComponent: angular.IComponentOptions = {
    template: `
        <header class="${S['header']}">
            <h1 class="${S['title']}">todos</h1>
        </header>
    `,
    controller: class implements angular.IController {
        constructor() { }
    }
};
