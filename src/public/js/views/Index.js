import React from 'react';

import Canvas from '../canvas/Canvas';

const drawingInterval = 2000;

const getCanvasProps = () => {
    let drawing = false;
    let timeout = null;

    const canvasProps = {
        onDown: (pos) => {
            if (drawing) {
                clearTimeout(timeout);
            } else {
                console.log("started drawing");

                drawing = true;
            }
        },

        onMove: (pos) => {
            //
        },

        onUp: (pos) => {
            timeout = setTimeout(() => {
                console.log("stopped drawing");

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