import { blue500 } from 'material-ui/styles/colors';
import { extend, noop, pick } from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles';

const getRelativePos = (elem, evt) => {
    const rect = elem.getBoundingClientRect();

    return {
        x: Math.floor(evt.clientX - rect.left),
        y: Math.floor(evt.clientY - rect.top)
    };
};

const addMoveEventListener = (elem, onMove, onUp = noop) => {
    const onEnd = (evt) => {
        elem.removeEventListener('mousemove', onMove);
        elem.removeEventListener('mouseup', onEnd);

        onUp(evt);
    };

    elem.addEventListener('mousemove', onMove);
    elem.addEventListener('mouseup', onEnd);
};

const canvases = new WeakMap();

export default class Canvas extends React.Component {
    static propTypes = {
        context: React.PropTypes.shape({
            lineCap: React.PropTypes.string,
            lineWidth: React.PropTypes.number,
            strokeStyle: React.PropTypes.string
        }),

        onDown: React.PropTypes.func,
        onMove: React.PropTypes.func,
        onUp: React.PropTypes.func
    };

    static defaultProps = {
        context: {
            lineCap: 'round',
            lineWidth: 3,
            strokeStyle: blue500
        },

        onDown: noop,
        onMove: noop,
        onUp: noop
    };

    render() {
        return (
            <div style={ styles.container }>
                <canvas ref={ (elem) => { canvases.set(this, elem); } }></canvas>
            </div>
        );
    }

    componentDidMount() {
        const canvas = ReactDOM.findDOMNode(canvases.get(this));
        const context = canvas.getContext('2d');
        const { onDown, onMove, onUp } = this.props;

        // Perhaps make these big enough for all screen sizes.
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;

        extend(context, pick(this.props.context, ['lineCap', 'lineWidth', 'strokeStyle']));

        canvas.addEventListener('mousedown', (downEvt) => {
            // Only left clicks.
            if (downEvt.which === 1) {
                let pos = getRelativePos(canvas, downEvt); // Get initial position.

                // Can dynamically set context properties here.

                onDown(pos);

                addMoveEventListener(canvas, (moveEvt) => {
                    context.beginPath();
                    context.moveTo(pos.x, pos.y);

                    pos = getRelativePos(canvas, moveEvt); // Update position.

                    context.lineTo(pos.x, pos.y);
                    context.stroke(); // Draw segment.
                    onMove(pos);
                }, (upEvt) => {
                    onUp(pos);
                });

                downEvt.preventDefault();
            }
        });
    }
}