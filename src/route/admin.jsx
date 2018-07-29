import React from "react"
import { Route, Switch } from 'react-router-dom';
import Dashboard from 'container/main/pages/dashboard'
import NotFound from 'container/404'

export default class Admin extends React.Component {
    render() {
        return (
            <Switch>
                {/* <Route exact path="/" component={Dashboard} /> */}
                <Route exact path="/dashboard" component={Dashboard} />
                <Route component={NotFound} />
            </Switch>
        )
    }
}

