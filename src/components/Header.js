import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './Header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import { auth } from '../firebase';
function Header() {
	const [state, dispatch] = useStateValue();
	const handleLogout = () => {
		if (state.user) {
			auth.signOut();
		}
	};
	const showName = () => {
		for (let i = 0; i < state.user.email.length; i++)
			if (state.user.email.charAt(i) === '@')
				return 'Hello ' + state.user.email.slice(0, i);
	};
	return (
		<div className="header">
			<Link to="/">
				<img
					src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt="amazon_logo"
					className="header__logo"
				/>
			</Link>
			<div className="header__search">
				<input className="header__searchInput" type="text" />
				<SearchIcon className="header__searchIcon" />
			</div>
			<div className="header__Nav">
				<div className="header__link">
					<div className="header__option">
						{state.user ? (
							<>
								<span className="header__optionLineOne">{showName()}</span>
								<span
									className="header__optionLineTwo"
									onClick={() => handleLogout()}
								>
									Log Out
								</span>
							</>
						) : (
							<Link to="/signin">
								<div style={{ color: 'white' }} className="header__option">
									<span className="header__optionLineOne">Hello Guest</span>
									<span className="header__optionLineTwo">Signin</span>
								</div>
							</Link>
						)}
					</div>
				</div>

				<div className="header__link">
					<div className="header__option">
						<span className="header__optionLineOne">Return </span>
						<span className="header__optionLineTwo">Order</span>
					</div>
				</div>
				<div className="header__link">
					<div className="header__option">
						<span className="header__optionLineOne">Your</span>
						<span className="header__optionLineTwo">Prime</span>
					</div>
				</div>
				<Link to="/checkout">
					<div className=" header_baskerLink">
						<div className="header__optionbasket">
							<ShoppingBasketIcon />
							<div className="header_optionLineTwo header__basketcount">
								{state.basket.length}
							</div>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
