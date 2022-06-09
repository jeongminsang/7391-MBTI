import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../src/components/home';
import Options from './components/option';
import Department from '../src/components/department';

class app extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/departmentMBTI">
                        <Options />
                    </Route>
                    <Route>
                        <Route
                            path="/result/:departmentName"
                            component={Department}
                        />
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default app;
