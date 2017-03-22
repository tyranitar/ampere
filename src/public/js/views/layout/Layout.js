import React from 'react';

import styles from './styles';

export default class Layout extends React.Component {
    render() {
        return (
            <div style={ styles }>
                { this.props.children }
            </div>
        );
    }
}