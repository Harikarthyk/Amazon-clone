import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Sigin.css';
import { auth } from '../firebase';
function Sigin() {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const handleSignin = (e) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.then((result) => {
				if (result) {
					history.push('/');
				}
			})
			.catch((error) => alert(error));
	};
	const handleRegister = (e) => {
		e.preventDefault();
		auth.createUserWithEmailAndPassword(email, password).then((result) => {
			if (result) {
				history.push('/');
			}
		});
	};
	return (
		<div className="login">
			<Link to="/">
				<img
					className="login__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
					alt=""
				/>
			</Link>
			<div className="login__container">
				<h3>Sign in</h3>
				<form>
					<p>E-mail</p>
					<input
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						value={email}
					/>
					<p>Password</p>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						onClick={(e) => handleSignin(e)}
						type="submit"
						className="login__signButton"
					>
						Sign In
					</button>
				</form>
				<p>
					By signing-in you agree to Amazon's Conditions of Use &amp; Sale.
					Please see our Privacy Notice, our Cookies Notice and our
					Interest-Based Ads Notice.
				</p>
				<button
					onClick={(e) => handleRegister(e)}
					className="login__registerButton"
				>
					Create your Amazon Account
				</button>
			</div>
		</div>
	);
}

export default Sigin;
