
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from 'container/login'
import Dashboard from 'container/dashboard'
import NotFound from 'container/404'
import Demo from 'container/demo'
import styles from './App.less'
import 'styles/index.css'

export default class APP extends React.Component {
	render() {
		return (
			<Router>
				<div className={styles.app}>
					<Switch>
						<Route exact path="/" component={Dashboard} />
						<Route exact path="/dashboard" component={Dashboard} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/notFound" component={Dashboard} />
						<Route exact path="/demo" component={Demo} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</Router>
		)
	}
}
