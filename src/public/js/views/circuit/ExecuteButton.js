import React from 'react';
import IconButton from 'material-ui/IconButton';
import PlayArrow from 'material-ui/svg-icons/av/play-arrow';

import styles from './styles';
import props from './props';

export default class ExecuteButton extends React.Component {
    render() {
        return (
            <div style={ styles.executeButtonContainer }>
                <IconButton { ...props.executeButton }>
                    <PlayArrow />
                </IconButton>
            </div>
        );
    }
}