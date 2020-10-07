import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { IconButton, TextField, FlatButton } from 'material-ui';
import LightbulbOutline from 'material-ui/svg-icons/action/lightbulb-outline';
import { yellow500 } from 'material-ui/styles/colors';
import { merge } from 'lodash';

import HeaderContainer from '../../components/header-container/HeaderContainer';
import sharedStyles from '../../styles/index';
import cardStyles from '../../styles/card';
import sharedProps from '../../props/index';

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

    login() {
        this.props.router.push('/');
    }

    render() {
        const lightbulbProps = this.state.lit ? merge({}, sharedProps.iconButtonLarge, {
            iconStyle: {
                fill: yellow500
            }
        }) : sharedProps.iconButtonLarge;

        return (
            <HeaderContainer>
                <Card style={ cardStyles.card }>
                    <CardText>
                        <div style={ sharedStyles.container }>
                            <IconButton { ...lightbulbProps } onClick={ this.toggleLightbulb.bind(this) }>
                                <LightbulbOutline />
                            </IconButton>
                        </div>

                        <TextField hintText='Email' style={ cardStyles.textField } { ...sharedProps.textField } />
                        <TextField hintText='Password' type='password' style={ cardStyles.textField } { ...sharedProps.textField } />
                    </CardText>
                    <CardActions style={ cardStyles.cardActions}>
                        <FlatButton label='Signup' { ...sharedProps.flatButton } onClick={ () => { this.props.router.push('/signup'); } } />
                        <FlatButton label='Login' { ...sharedProps.flatButton } onClick={ this.login.bind(this) } />
                    </CardActions>
                </Card>
            </HeaderContainer>
        );
    }
}