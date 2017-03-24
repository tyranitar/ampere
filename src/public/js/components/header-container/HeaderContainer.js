import React from 'react';

import sharedStyles from '../../styles/index';
import styles from './styles';

export default class HeaderContainer extends React.Component {
    render() {
        return (
            <div style={ sharedStyles.fullWidth }>
                <div style={ sharedStyles.container }>
                    <span style={ styles.headerStyle }>Ampere</span>
                </div>

                <div style={ sharedStyles.container }>
                    { this.props.children }
                </div>
            </div>
        );
    }
}