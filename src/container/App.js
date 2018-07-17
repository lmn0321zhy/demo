
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from 'container/login'
import Dashboard from 'container/dashboard'
import Tabs from 'components/tabs'

import styles from './App.less'

export default class APP extends React.Component {
	render() {
		return (
			<Router>
				<div className={styles.app}>
					<Switch>
						<Route exact path="/" component={Tabs} />
						<Route exact path="/dashboard" component={Dashboard} />
					</Switch>
				</div>
			</Router>
		)
	}
}
