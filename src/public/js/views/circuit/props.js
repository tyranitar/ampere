import { merge } from 'lodash';

import sharedProps from '../../props/index';

export default {
    executeButton: merge({}, sharedProps.iconButtonLarge, {
        style: {
            pointerEvents: 'all'
        }
    })
};