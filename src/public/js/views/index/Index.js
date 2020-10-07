import React from 'react';
import IconButton from 'material-ui/IconButton';
import Create from 'material-ui/svg-icons/content/create';
import List from 'material-ui/svg-icons/action/list';
import School from 'material-ui/svg-icons/social/school';

import HeaderContainer from '../../components/header-container/HeaderContainer';
import sharedStyles from '../../styles/index';
import sharedProps from '../../props/index';

export default class Index extends React.Component {
    createCircuit() {
        this.props.router.push('/circuit');
    }

    joinCircuit() {
        this.props.router.push('/join');
    }

    trainAlgorithm() {
        this.props.router.push('/training');
    }

    render() {
        return (
            <HeaderContainer>
                <div>
                    <IconButton { ...sharedProps.iconButtonLarge } onClick={ this.createCircuit.bind(this) }>
                        <Create />
                    </IconButton>

                    <span style={ sharedStyles.subtitleStyle }>Create Circuit</span>
                </div>
                <div>
                    <IconButton { ...sharedProps.iconButtonLarge } onClick={ this.joinCircuit.bind(this) }>
                        <List />
                    </IconButton>

                    <span style={ sharedStyles.subtitleStyle }>Join Circuit</span>
                </div>
                <div>
                    <IconButton { ...sharedProps.iconButtonLarge } onClick={ this.trainAlgorithm.bind(this) }>
                        <School />
                    </IconButton>

                    <span style={ sharedStyles.subtitleStyle }>Train Algorithm</span>
                </div>
            </HeaderContainer>
        );
    }
}