import React from 'react';

import Canvas from '../../canvas/Canvas';
import getCanvasProps from './get-canvas-props';
import Grid from '../../grid_utils/grid';

export default class Index extends React.Component {
    render() {
        const canvasProps = getCanvasProps();

        return (
            <Canvas { ...canvasProps }></Canvas>
        );
    }
}