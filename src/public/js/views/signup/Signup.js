import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { IconButton, TextField, FlatButton } from 'material-ui';
import Person from 'material-ui/svg-icons/social/person';

import HeaderContainer from '../../components/header-container/HeaderContainer';
import sharedStyles from '../../styles/index';
import cardStyles from '../../styles/card';
import sharedProps from '../../props/index';

export default class Signup extends React.Component {
    signup() {
        this.props.router.push('/login');
    }

    render() {
        return (
            <HeaderContainer>
                <Card style={ cardStyles.card }>
                    <CardText>
                        <div style={ sharedStyles.container }>
                            <IconButton { ...sharedProps.iconButtonLarge }>
                                <Person />
                            </IconButton>
                        </div>

                        <TextField hintText='Email' style={ cardStyles.textField } { ...sharedProps.textField } />
                        <TextField hintText='Password' type='password' style={ cardStyles.textField } { ...sharedProps.textField } />
                        <TextField hintText='Confirm Password' type='password' style={ cardStyles.textField } { ...sharedProps.textField } />
                    </CardText>

                    <CardActions style={ cardStyles.cardActions}>
                        <FlatButton label='Signup' { ...sharedProps.flatButton } onClick={ this.signup.bind(this) } />
                    </CardActions>
                </Card>
            </HeaderContainer>
        );
    }
}