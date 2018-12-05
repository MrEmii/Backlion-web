import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from './components/App';

const AppRoutes = () => {
    <App>
        <Switch>
            <Route exact path="/" />
        </Switch>
    </App>
}

export default AppRoutes;