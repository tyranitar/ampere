import React from 'react';
import IconButton from 'material-ui/IconButton';
import Create from 'material-ui/svg-icons/content/create';
import List from 'material-ui/svg-icons/action/list';
import School from 'material-ui/svg-icons/social/school';

import HeaderContainer from '../../components/header-container/HeaderContainer';
import sharedStyles from '../../styles/index';
import sharedProps from '../../props/index';

export default class Index extends React.Component {
    render() {
        return (
            <HeaderContainer>
                <div>
                    <IconButton { ...sharedProps.iconButton }>
                        <Create />
                    </IconButton>

                    <span style={ sharedStyles.subtitleStyle }>Create Circuit</span>
                </div>
                <div>
                    <IconButton { ...sharedProps.iconButton }>
                        <List />
                    </IconButton>

                    <span style={ sharedStyles.subtitleStyle }>Join Circuit</span>
                </div>
                <div>
                    <IconButton { ...sharedProps.iconButton }>
                        <School />
                    </IconButton>

                    <span style={ sharedStyles.subtitleStyle }>Train Algorithm</span>
                </div>
            </HeaderContainer>
        );
    }
}