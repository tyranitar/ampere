import { blue500, grey500 } from 'material-ui/styles/colors';

const btnSizeLarge = 150;
const btnMarginLarge = 25;
const btnBorderSizeLarge = 5;

const iconSizeLarge = 100;

const btnPaddingLarge = ((btnSizeLarge - iconSizeLarge) / 2) - btnBorderSizeLarge;

export default {
    fullWidth: {
        width: '100%'
    },

    container: {
        display: 'flex',
        justifyContent: 'center'
    },

    btnStyleLarge: {
        margin: `${ btnMarginLarge }px`,
        width: `${ btnSizeLarge }px`,
        height: `${ btnSizeLarge }px`,
        padding: `${ btnPaddingLarge }px`,
        border: `${ btnBorderSizeLarge }px solid ${ blue500 }`,
        borderRadius: '50%'
    },

    iconStyleLarge: {
        width: `${ iconSizeLarge }px`,
        height: `${ iconSizeLarge }px`,
        fill: blue500
    },

    subtitleStyle: {
        display: 'block',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '20px',
        color: grey500
    }
};