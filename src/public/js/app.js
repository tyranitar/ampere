import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Layout from './views/layout/Layout';
import Index from './views/index/Index';
import Login from './views/login/Login';
import Signup from './views/signup/Signup';
import Circuit from './views/circuit/Circuit';
import Join from './views/join/Join';
import Training from './views/training/Training';

const app = document.getElementById('app');

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
        <Router history={ hashHistory }>
            <Route path='/' component={ Layout }>
                <IndexRoute component={ Index } />
                <Route path='/login' component={ Login } />
                <Route path='/signup' component={ Signup } />
                <Route path='/circuit' component={ Circuit } />
                <Route path='/join' component={ Join } />
                <Route path='/training' component={ Training } />
            </Route>
        </Router>
    </MuiThemeProvider>,
app);