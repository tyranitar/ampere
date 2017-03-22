import React from 'react';
import IconButton from 'material-ui/IconButton';
import Create from 'material-ui/svg-icons/content/create';
import List from 'material-ui/svg-icons/action/list';
import School from 'material-ui/svg-icons/social/school';

import HeaderContainer from '../../components/header-component/HeaderContainer';
import sharedStyles from '../../styles/index';

const iconBtnProps = {
    style: sharedStyles.btnStyleLarge,
    iconStyle: sharedStyles.iconStyleLarge
};

export default class Index extends React.Component {
    render() {
        return (
            <HeaderContainer>
                <div>
                    <IconButton { ...iconBtnProps }>
                        <Create />
                    </IconButton>

                    <span style={ sharedStyles.subtitleStyle }>Create Circuit</span>
                </div>
                <div>
                    <IconButton { ...iconBtnProps }>
                        <List />
                    </IconButton>

                    <span style={ sharedStyles.subtitleStyle }>Join Circuit</span>
                </div>
                <div>
                    <IconButton { ...iconBtnProps }>
                        <School />
                    </IconButton>

                    <span style={ sharedStyles.subtitleStyle }>Train Algorithm</span>
                </div>
            </HeaderContainer>
        );
    }
}