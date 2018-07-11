import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from 'components/home';
import Clock from 'components/Clock';


class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route exact path='/' component={Home} />
						{/* <Route exact path='/' component={Clock} /> */}
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
