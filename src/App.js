import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CheckOut from './components/CheckOut';
import Sigin from './components/Sigin';
import { auth } from './firebase';
import { useStateValue } from './context/StateProvider';
import Footer from './components/Footer';
import Payment from './components/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const promise = loadStripe(
	'pk_test_51HPvdfLIsRCbc3VeUZIMs0yqNIUpO5ZRxf1o3d5iEnnqHcTf6EuTlfV6VBcA9d6hQ7HFn57WQRZlytsCcejtsXxq00djy1Bsid',
);

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
						<Home /> <Footer />
					</Route>
					<Route exact path="/checkout">
						<Header />
						<CheckOut />
						<Footer />
					</Route>
					<Route exact path="/payment">
						<Header />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
						<Footer />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
