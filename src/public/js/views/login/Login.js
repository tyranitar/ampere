import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { IconButton, TextField, FlatButton } from 'material-ui';
import LightbulbOutline from 'material-ui/svg-icons/action/lightbulb-outline';
import { yellow500 } from 'material-ui/styles/colors';
import { merge } from 'lodash';

import HeaderContainer from '../../components/header-container/HeaderContainer';
import sharedStyles from '../../styles/index';
import sharedProps from '../../props/index';
import styles from './styles';

export default class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            lit: false
        };
    }

    toggleLightbulb() {
        this.setState({
            lit: !this.state.lit
        });
    }

    render() {
        const lightbulbProps = this.state.lit ? merge({}, sharedProps.iconButtonLarge, {
            iconStyle: {
                fill: yellow500
            }
        }) : sharedProps.iconButtonLarge;

        return (
            <HeaderContainer>
                <Card style={ styles.card }>
                    <CardText>
                        <div style={ sharedStyles.container }>
                            <IconButton { ...lightbulbProps } onClick={ this.toggleLightbulb.bind(this) }>
                                <LightbulbOutline />
                            </IconButton>
                        </div>

                        <TextField hintText='Email' style={ styles.textField } { ...sharedProps.textField } />
                        <TextField hintText='Password' style={ styles.textField } { ...sharedProps.textField } />
                    </CardText>
                    <CardActions style={ styles.cardActions} >
                        <FlatButton label='Login' { ...sharedProps.flatButton } />
                    </CardActions>
                </Card>
            </HeaderContainer>
        );
    }
}