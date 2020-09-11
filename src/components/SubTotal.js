import React, { useEffect, useState } from 'react';
import './SubTotal.css';
import { useStateValue } from '../context/StateProvider';
import { Link } from 'react-router-dom';
function SubTotal() {
	const [state, dispatch] = useStateValue();
	const [subTotal, setSubTotal] = useState(0);
	useEffect(() => {
		let result = 0;
		for (let i = 0; i < state.basket.length; i++)
			result += parseFloat(state.basket[i].price);
		setSubTotal(result);
	}, [state]);
	return (
		<div className="subtotal">
			<p>
				Subtotal({state.basket.length} items) : <strong>${subTotal}</strong>
			</p>

			<small className="subtotal__gift">
				<input type="checkbox" /> This order contains gift.
			</small>
			<Link to="/payment">
				<button className="subtotal__button ">Proced to Checkout</button>
			</Link>
		</div>
	);
}

export default SubTotal;
