import './Carousel.scss';
import Carousel from 'react-bootstrap/Carousel';
import { useLocation } from 'react-router-dom';
import Item from './item-carousel/Item';
import apiConfig from 'api/apiConfig';
import data from './data';

function ControlledCarousel() {
	const location = useLocation();

	return (
		<div>
			<div
				className={`carousel myCrs ${
					location.pathname == '/' ? 'd-block' : 'd-none'
				}`}
			>
				<Carousel>
					{data.map((item, i) => (
						<Carousel.Item
							interval={90000}
							className='h-100'
							key={i}
						>
							<Item
								title={item.title}
								decs={item.decs}
								img={apiConfig.originalImage(item.poster_path)}
								video={item.video}
							/>
						</Carousel.Item>
					))}
				</Carousel>
			</div>
		</div>
	);
}

export default ControlledCarousel;