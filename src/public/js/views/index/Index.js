import React from 'react';

import Canvas from '../../canvas/Canvas';
import config from '../../config/index.json';

const drawingInterval = 2000;

const getInitialBounds = () => {
    const initialBounds = {
        minX: Infinity,
        minY: Infinity,
        maxX: -Infinity,
        maxY: -Infinity
    };

    return initialBounds;
};

const getCanvasProps = () => {
    let drawing = false;
    let timeout = null;
    let bounds = null;

    const canvasProps = {
        onDown: (pos) => {
            if (drawing) {
                clearTimeout(timeout);
            } else {
                console.log("started drawing");

                bounds = getInitialBounds();
                drawing = true;
            }
        },

        onMove: (pos) => {
            const { x, y } = pos;

            // Not using `else if` in case of single pixels.

            if (x < bounds.minX) {
                bounds.minX = x;
            }

            if (x > bounds.maxX) {
                bounds.maxX = x;
            }

            if (y < bounds.minY) {
                bounds.minY = y;
            }

            if (y > bounds.maxY) {
                bounds.maxY = y;
            }
        },

        onUp: function (pos) {
            timeout = setTimeout(() => {
                console.log("stopped drawing");

                if (config.debug.bounds) {
                    this.drawLine(bounds.minX, bounds.minY, bounds.maxX, bounds.minY, 'black');
                    this.drawLine(bounds.minX, bounds.minY, bounds.minX, bounds.maxY, 'black');
                    this.drawLine(bounds.maxX, bounds.minY, bounds.maxX, bounds.maxY, 'black');
                    this.drawLine(bounds.minX, bounds.maxY, bounds.maxX, bounds.maxY, 'black');
                }

                bounds = null;
                drawing = false;
            }, drawingInterval);
        }
    };

    return canvasProps;
};

export default class Index extends React.Component {
    render() {
        const canvasProps = getCanvasProps();

        return (
            <Canvas { ...canvasProps }></Canvas>
        );
    }
}