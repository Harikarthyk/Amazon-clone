import React from 'react';
import './Home.css';
import Product from './Product';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<Carousel style={{ marginBottom: '-18%' }}>
					<Carousel.Item>
						<img
							className="home__image"
							src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/september/GWbanners/DesktopHero_1500x600._CB406681182_.jpg"
							alt="First slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="home__image"
							src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
							alt="Third slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="home__image"
							src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/fashion/MA2020/ApparelP0/BOTM/SEP/PC/PC-BUNK_Only-1500x600-01._CB405229653_.jpg"
							alt="First slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="home__image"
							src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/OnePlus/August/OnePlus8Series/KV2/NCE/V247266159_Rush-Wireless-OnePlus_8Series_with_NCE_DesktopTallHero_1500x600._CB405022341_.jpg"
							alt="Third slide"
						/>
					</Carousel.Item>

					<Carousel.Item>
						<img
							className="home__image"
							src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_ft._CB404804383_.jpg"
							alt="Third slide"
						/>
					</Carousel.Item>
				</Carousel>
				<div className="home__row">
					<Product
						id={1000001}
						title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
						price="615"
						rating={3}
						img="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
					/>
					<Product
						id={1000002}
						title="Clever Programmer Academy"
						price="500"
						rating={5}
						img="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:60/https://www.filepicker.io/api/file/q8yh1SmySmy5BNapeDem"
					/>
				</div>
				<div className="home__row">
					<Product
						id={1000004}
						title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
						price={199.99}
						rating={3}
						img="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
					/>
					<Product
						id={1000003}
						title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
						price={59.19}
						rating={3}
						img="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
					/>
					<Product
						id={1000005}
						title="BIZZARE Men's Cotton Ny Baseball Cap (Black)"
						price={78.9}
						rating={4}
						img="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id={1000006}
						title="Sony SRS-XB10 EXTRA BASS Portable Splash-proof Wireless Speaker with Bluetooth and NFC (Black)"
						price="215"
						rating={3}
						img="https://images-na.ssl-images-amazon.com/images/I/613xiOI%2BtqL._SY606_.jpg"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
