import './Carousel.scss';
import Carousel from 'react-bootstrap/Carousel';
import { useLocation } from 'react-router-dom';
import Item from './item-carousel/Item';
import apiConfig from 'api/apiConfig';
import data from './item-carousel/data';

function ControlledCarousel() {
	const location = useLocation();

	return (
			<div
				className={`carousel myCrs container${
					location.pathname === '/' ? 'd-block' : 'd-none'
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
								video={item.video}
                                link={item.link}
							/>
						</Carousel.Item>
					))}
				</Carousel>
			</div>
	);
}

export default ControlledCarousel;
