import { ICompose } from '../../core/interfaces/IFeature';

import { commonDirectives } from './directives';
import { commonServices } from './services';

export const commons: ICompose = {
    directive: commonDirectives,
    service: commonServices
};
