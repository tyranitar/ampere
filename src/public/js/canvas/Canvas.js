import { blue500 } from 'material-ui/styles/colors';
import { extend, noop, pick } from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles';

const canvases = new WeakMap();
const pixelLen = 4; // Size of RGBA data.
const rgbLen = 3; // Size of RGB data.

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

const getCanvasAndContext = (instance) => {
    let canvas = null;
    let context = null;

    try {
        canvas = ReactDOM.findDOMNode(canvases.get(instance));
        context = canvas.getContext('2d');
    } catch (err) {
        throw "canvas has not been mounted yet";
    }

    return {
        canvas,
        context
    };
}

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

    static getBinaryPixelValue(imageData, x, y) {
        // Out of bounds.
        if (x < 0 || x >= imageData.width || y < 0 || y >= imageData.height) {
            return null;
        }

        const pixelIdx = pixelLen * (x + imageData.width * y);
        const data = imageData.data;

        for (let i = 0; i < rgbLen; i++) {
            if (data[pixelIdx + i] > 0) {
                return 1;
            }
        }

        return 0;
    }

    render() {
        return (
            <div style={ styles.container }>
                <canvas ref={ (elem) => { canvases.set(this, elem); } }></canvas>
            </div>
        );
    }

    componentDidMount() {
        const { canvas, context } = getCanvasAndContext(this);
        let { onDown, onMove, onUp } = this.props;

        onDown = onDown.bind(this);
        onMove = onMove.bind(this);
        onUp = onUp.bind(this);

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

    getImageData() {
        const { canvas, context } = getCanvasAndContext(this);

        return context.getImageData(0, 0, canvas.width, canvas.height);
    }

    putImageData(imageData, x, y) {
        const { canvas, context } = getCanvasAndContext(this);

        context.putImageData(imageData, x, y);
    }

    drawLine(x1, y1, x2, y2, strokeStyle) {
        const { canvas, context } = getCanvasAndContext(this);
        const originalStrokeStyle = context.strokeStyle;

        if (strokeStyle) {
            context.strokeStyle = strokeStyle;
        }

        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();

        if (strokeStyle) {
            context.strokeStyle = originalStrokeStyle;
        }
    }
}