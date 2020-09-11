import React, { useEffect, useState } from 'react';
import { useStateValue } from '../context/StateProvider';
import CheckOutProduct from './CheckOutProduct';
import { Link, Redirect } from 'react-router-dom';
import './Payment.css';
function Payment() {
	const [state, dispatch] = useStateValue();

	// const getTotal = () => {
	// 	let result = 0;
	// 	for (let i = 0; i < state.basket.length; i++)
	// 		result += parseFloat(state.basket[i].price);

	// 	return result;
	// };
	if (state.basket.length === 0) return <Redirect to="/" />;
	return (
		<div className="payment">
			<div className="payment__container">
				<h1>
					Check Out ( <Link to="/checkout">{state.basket.length}</Link> Items)
				</h1>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment__address">
						<p>Chennai Hub</p>
						<p>Tamil Nadu</p>
						<p>India</p>
					</div>
				</div>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Reiview Items and Delivery</h3>
					</div>
					<div className="payment__items">
						{state.basket.map((product) => (
							<CheckOutProduct
								key={product.id}
								id={product.id}
								img={product.img}
								title={product.title}
								price={product.price}
								rating={product.rating}
							/>
						))}
					</div>
				</div>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Payment Section </h3>
					</div>
					<div className="payment__details"></div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
