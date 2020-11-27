import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Page404 from './Page404';
import Nav from './components/Nav';
import Books from './Books';

function App() {
	return (
		<div className="App">
			<BrowserRouter >
				<Nav />
				<Switch>
					<Route exact path="/books" component={Books} />
					<Route exact path="/" component={Home} />
					<Route exact path="/add_book/:data" component={Home} />
					<Route exact path="/add_book" component={Home} />
					<Route path="*" component={Page404} />
				</Switch>
				<div className="footer">By Ishmam</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
