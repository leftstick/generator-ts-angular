
import { IRoute } from '../../core/interfaces/IFeature';

export const routes: IRoute[] = [
    {
        id: 'todos',
        isDefault: true,
        when: '/todos',
        template: '<todos></todos>'
    }
];
