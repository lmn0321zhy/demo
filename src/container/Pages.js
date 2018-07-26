
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from 'container/login'
import Dashboard from 'container/dashboard'
import Demo from 'container/demo'
import CommonEchart from 'components/echart'
import NotFound from 'container/404'

import styles from './Page.less'

export default class Page extends React.Component {
	render() {
		return (
			<Router>
				<div className={styles.app}>
					<Switch>
						<Route exact path="/" component={Dashboard} />
						<Route exact path="/app/dashboard/index" component={Dashboard} />
						<Route exact path="/app/ui/buttons" component={Dashboard} />
						<Route exact path="/echart" render={() => <CommonEchart type='pieOption' />} />
						<Route exact path="/notFound" component={NotFound} />
					</Switch>
				</div>
			</Router>
		)
	}
}
