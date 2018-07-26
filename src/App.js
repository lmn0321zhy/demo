
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from 'container/login'
import Dashboard from 'container/dashboard'
import NotFound from 'container/404'
import styles from './App.less'
import 'styles/animate.css'

export default class APP extends React.Component {
	render() {
		return (
			<Router>
				<div className={styles.app}>
					<Switch>
						<Route exact path="/" component={Dashboard} />
						<Route exact path="/dashboard" component={Dashboard} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/404" render={() => <h1>404</h1>} />
						<Route exact path="/notFound" component={NotFound} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</Router>
		)
	}
}
