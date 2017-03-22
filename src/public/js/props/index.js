import { blue400, blue500, blue600, white } from 'material-ui/styles/colors';

import sharedStyles from '../styles/index';

export default {
    iconButton: {
        style: sharedStyles.btnStyleLarge,
        iconStyle: sharedStyles.iconStyleLarge
    },

    flatButton: {
        rippleColor: blue600,
        backgroundColor: blue500,
        hoverColor: blue400,

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