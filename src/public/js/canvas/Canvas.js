import { blue500 } from 'material-ui/styles/colors';
import { extend, noop, pick } from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles';

const getRelativePos = (evt, elem) => {
    const rect = elem.getBoundingClientRect();

    return {
        x: Math.floor(evt.clientX - rect.left),
        y: Math.floor(evt.clientY - rect.top)
    };
};

const onDrag = (elem, onMove, onUp = noop) => {
    const onEnd = (evt) => {
        elem.removeEventListener('mousemove', onMove);
        elem.removeEventListener('mouseup', onEnd);

        onUp(evt);
    };

    elem.addEventListener('mousemove', onMove);
    elem.addEventListener('mouseup', onEnd);
};

export default class Canvas extends React.Component {
    static propTypes = {
        context: React.PropTypes.shape({
            lineCap: React.PropTypes.string,
            lineWidth: React.PropTypes.number,
            strokeStyle: React.PropTypes.string
        })
    };

    static defaultProps = {
        context: {
            lineCap: 'round',
            lineWidth: 3,
            strokeStyle: blue500
        }
    };

    render() {
        return (
            <div style={ styles.container }>
                <canvas ref="canvas"></canvas>
            </div>
        );
    }

    componentDidMount() {
        const canvas = ReactDOM.findDOMNode(this.refs.canvas);
        const context = canvas.getContext('2d');

        // Perhaps make these big enough for all screen sizes.
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;

        extend(context, pick(this.props.context, ['lineCap', 'lineWidth', 'strokeStyle']));

        canvas.addEventListener('mousedown', (downEvt) => {
            // Only left clicks.
            if (downEvt.which === 1) {
                let pos = getRelativePos(downEvt, canvas); // Get initial position.

                // Can dynamically set context properties here.

                onDrag(canvas, (moveEvt) => {
                    context.beginPath();
                    context.moveTo(pos.x, pos.y);

                    pos = getRelativePos(moveEvt, canvas); // Update position.

                    context.lineTo(pos.x, pos.y);
                    context.stroke(); // Draw segment.
                }, (upEvt) => {
                    console.log("finished drawing");
                });

                downEvt.preventDefault();
            }
        });
    }
}