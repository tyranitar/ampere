import React from 'react';

import Canvas from '../../components/canvas/Canvas';
import getCanvasProps from './get-canvas-props';
import Grid from '../../grid_utils/grid';
import ExecuteButton from './ExecuteButton';

export default class Index extends React.Component {
    render() {
        const canvasProps = getCanvasProps();

        return (
            <Canvas { ...canvasProps }>
                <ExecuteButton />
            </Canvas>
        );
    }
}