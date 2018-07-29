
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from 'container/login'
import Main from 'container/main'
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
						<Route exact path='/' component={Main} />
						<Route exact path='/dashboard' component={Main} />
						<Route exact path='/login' component={Login} />
						<Route exact path='/notFound' component={Main} />
						<Route exact path='/demo' component={Demo} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</Router>
		)
	}
}
