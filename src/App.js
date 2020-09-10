import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CheckOut from './components/CheckOut';
import Sigin from './components/Sigin';
import { auth } from './firebase';
import { useStateValue } from './context/StateProvider';

function App() {
	const [state, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				dispatch({
					type: 'SET_USER',
					user: user,
				});
			} else {
				dispatch({
					type: 'SET_USER',
					user: null,
				});
			}
		});
	}, []);
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/signin">
						<Sigin />
					</Route>
					<Route exact path="/">
						<Header />
						<Home />
					</Route>
					<Route exact path="/checkout">
						<Header />
						<CheckOut />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
