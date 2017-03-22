import React from 'react';

import styles from './styles';
import sharedStyles from '../../styles/index';

export default class HeaderContainer extends React.Component {
    render() {
        return (
            <div style={ sharedStyles.fullWidth }>
                <div style={ styles.containerStyle }>
                    <span style={ styles.headerStyle }>Ampere</span>
                </div>

                <div style={ styles.containerStyle }>
                    { this.props.children }
                </div>
            </div>
        );
    }
}