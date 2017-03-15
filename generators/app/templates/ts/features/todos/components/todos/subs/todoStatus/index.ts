import * as S from './todoStatus.css';

import { ITodo } from '../../../../interfaces/ITodo';
import { EventUtil } from '../../../../../common/services/event';

export const TodoStatusComponent: angular.IComponentOptions = {
    template: `
        <div class="${S['todo-status']}" >
            <span class="${S['todo-count']}"><strong>{{ $ctrl.remainingCount }}</strong>
                <ng-pluralize count="$ctrl.remainingCount" when="{ '0': 'item left', one: 'item left', other: 'items left' }">items left</ng-pluralize>
            </span>
            <ul class="${S['filters']}">
                <li>
                    <a ng-class="{'${S['selected']}': $ctrl.filter === ''}" href="" ng-click="$ctrl.toggleFilter($event, '')">All</a>
                </li>
                <li>
                    <a ng-class="{'${S['selected']}': $ctrl.filter === 'active'}" href="" ng-click="$ctrl.toggleFilter($event, 'active')">Active</a>
                </li>
                <li>
                    <a ng-class="{'${S['selected']}': $ctrl.filter === 'completed'}" href="" ng-click="$ctrl.toggleFilter($event, 'completed')">Completed</a>
                </li>
            </ul>
            <button class="${S['clear-completed']}" ng-click="$ctrl.clearDoneTodos()" ng-if="$ctrl.list.length - $ctrl.remainingCount">Clear completed</button>
        </div>
    `,
    bindings: {
        list: '<',
        onFilterChanged: '&',
        onCleanCompleted: '&'
    },
    controller: class implements angular.IController {
        list: ITodo[];
        onFilterChanged: { (filter: { filter: string; }): void; };
        onCleanCompleted: { (): void; };

        filter: string = '';
        remainingCount: number;

        /*@ngInject*/
        constructor(private EventUtil: EventUtil) { }

        $onChanges(changes: { list: angular.IChangesObject<Array<ITodo>> }) {
            this.remainingCount = changes.list.currentValue.reduce((p, c) => p + (+!c.completed), 0);
        }

        toggleFilter(e: MouseEvent, filter: string) {
            this.EventUtil.stop(e);
            this.filter = filter;
            this.onFilterChanged({ filter });
        }

        clearDoneTodos() {
            this.onCleanCompleted();
        }
    }
};
