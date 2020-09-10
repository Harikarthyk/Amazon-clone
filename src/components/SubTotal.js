import React, { useEffect, useState } from 'react';
import './SubTotal.css';
import { useStateValue } from '../context/StateProvider';
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
			<button className="subtotal__button ">Proced to Checkout</button>
		</div>
	);
}

export default SubTotal;
