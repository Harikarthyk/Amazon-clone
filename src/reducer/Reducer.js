import Product from '../components/Product';

export const initialState = {
	basket: [],
	user: null,
};
export const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TO_BASKET':
			return {
				...state,
				basket: [...state.basket, action.item],
			};
		case 'REMOVE_FROM_BASKET':
			let newBasket = state.basket.filter(
				(product) => product.id !== action.item.id,
			);
			return {
				...state,
				basket: newBasket,
			};
		case 'SET_USER':
			return {
				...state,
				user: action.user,
			};
		default:
			return state;
	}
};
