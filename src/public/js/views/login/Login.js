import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { IconButton, TextField, FlatButton } from 'material-ui';
import Person from 'material-ui/svg-icons/social/person';

import HeaderContainer from '../../components/header-container/HeaderContainer';
import sharedStyles from '../../styles/index';
import sharedProps from '../../props/index';
import styles from './styles';

export default class Login extends React.Component {
    render() {
        return (
            <HeaderContainer>
                <Card style={ styles.card }>
                    <CardText>
                        <div style={ sharedStyles.container }>
                            <IconButton { ...sharedProps.iconButton }>
                                <Person />
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