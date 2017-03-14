import * as S from './todoFooter.css';

export const TodoFooterComponent: angular.IComponentOptions = {
    template: `
        <div class="${S['footer']}">
            <p>Double-click to edit a todo</p>
            <p>Credits:
                    <a href="http://twitter.com/cburgdorf">Christoph Burgdorf</a>,
                    <a href="http://ericbidelman.com">Eric Bidelman</a>,
                    <a href="http://jacobmumm.com">Jacob Mumm</a>,
                    <a href="http://blog.igorminar.com">Igor Minar</a>,
                    <a href="http://zamboch.blogspot.com">Pavel Savara</a>,
                    <a href="http://leftstick.github.io/">Howard.Zuo</a>
            </p>
        </div>
    `
};
