import React from 'react';
import './Product.css';
import { useStateValue } from '../context/StateProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Product({ id, title, price, rating, img }) {
	// const notify = () =>
	const [state, dispatch] = useStateValue();
	const checkProductInCart = () => {
		let checkExists = state.basket.filter((product, index) => {
			return id === product.id;
		});
		if (checkExists.length >= 1) {
			return false;
		}
		return true;
	};
	const handleBasket = () => {
		let checkExists = state.basket.filter((product, index) => {
			return id === product.id;
		});
		if (checkExists.length >= 1) {
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
			toast('Removed from the Basket!', {
				position: 'bottom-center',
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				type: 'dark',
			});
			return;
		}
		dispatch({
			type: 'ADD_TO_BASKET',
			item: {
				id: id,
				title: title,
				price: price,
				rating: rating,
				img: img,
			},
		});
		toast(`Product Added to the Basket!`, {
			position: 'bottom-center',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			type: 'info',
		});
	};
	return (
		<div className="product">
			<ToastContainer />
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<strong>${price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((_, index) => (
							<p key={index}>⭐</p>
						))}
				</div>
			</div>
			<img src={img} alt="" />
			<button onClick={handleBasket}>
				{checkProductInCart() ? 'Add to Basket' : 'Remove from Basket'}
			</button>
		</div>
	);
}

export default Product;
