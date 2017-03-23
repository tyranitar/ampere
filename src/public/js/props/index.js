import { blue500, blue600, blue700, white } from 'material-ui/styles/colors';

import sharedStyles from '../styles/index';

export default {
    iconButton: {
        style: sharedStyles.btnStyleLarge,
        iconStyle: sharedStyles.iconStyleLarge
    },

    flatButton: {
        backgroundColor: blue500,
        hoverColor: blue600,
        rippleColor: blue700,

        style: {
            color: white
        }
    },

    textField: {
        underlineFocusStyle: {
            borderColor: blue500
        }
    }
};