import React, { forwardRef } from 'react';
import './CheckOutProduct.css';
import { useStateValue } from '../context/StateProvider';
import 'react-toastify/dist/ReactToastify.css';
const CheckOutProduct = forwardRef((props, ref) => {
	const { id, img, title, price, rating } = props;
	const [state, dispatch] = useStateValue();
	const handleBasket = () => {
		dispatch({
			type: 'REMOVE_FROM_BASKET',
			item: {
				id: id,
				title: title,
				price: price,
				rating: rating,
				img: img,
			},
		});
	};
	return (
		<div ref={ref} className="checkoutProduct">
			<img className="checkoutProduct__image" src={img} alt="product" />
			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{title}</p>
				<p className="checkoutProduct__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProduct__rating">
					{Array(rating)
						.fill()
						.map((_, index) => (
							<p key={index}>⭐</p>
						))}
				</div>
				<button onClick={handleBasket}>Remove from basket</button>
			</div>
		</div>
	);
});

export default CheckOutProduct;
