
import React from 'react';
// import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AjaxDemo from 'container/dashboard'
// import Login from 'container/login'

export default class APP extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route exact path="/" component={AjaxDemo} />
						{/* <Route exact path="/" component={Login} /> */}
					</Switch>
				</div>
			</Router>
		)
	}
}
