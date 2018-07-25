
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from 'container/login'
import Dashboard from 'container/dashboard'
import Demo from 'container/demo'
import CommonEchart from 'components/echart'

import styles from './App.less'

export default class APP extends React.Component {
	render() {
		return (
			<Router>
				<div className={styles.app}>
					<Switch>
						<Route exact path="/" component={Dashboard} />
						<Route exact path="/app/dashboard/index" component={Dashboard} />
						<Route exact path="/app/ui/buttons" component={Dashboard} />
						<Route exact path="/echart" render={() => <CommonEchart type='pieOption' />} />
					</Switch>
				</div>
			</Router>
		)
	}
}
