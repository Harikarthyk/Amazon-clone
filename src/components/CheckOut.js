import React, { forwardRef } from 'react';
import SubTotal from './SubTotal';
import './CheckOut.css';
import CheckOutProduct from './CheckOutProduct';
import { useStateValue } from '../context/StateProvider';
import FlipMove from 'react-flip-move';

function CheckOut() {
	const [state, dispatch] = useStateValue();
	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					className="checkout__ad"
					src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
					alt=""
				/>
				<div></div>
				{state.basket.length === 0 ? (
					<div>
						<h2 className="checkout__title">Your Basket is Empty </h2>
						<img
							class="checkout__empty"
							src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
						/>
					</div>
				) : (
					<>
						<h2 className="checkout__title">My Shopping Basket</h2>
						<FlipMove
							className="flip-wrapper"
							enterAnimation="elevator"
							leaveAnimation="elevator"
						>
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
						</FlipMove>
					</>
				)}

				{/* <CheckOutProduct /> */}
			</div>
			{state.basket.length === 0 ? (
				''
			) : (
				<div className="checkout__right">
					<SubTotal />
				</div>
			)}
		</div>
	);
}

export default CheckOut;
