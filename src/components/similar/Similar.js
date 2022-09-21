import React, { useState, useEffect } from 'react';
import './Similar.scss';
import tmdbApi, { category } from 'api/tmdbApi';
import Carousel from 'react-multi-carousel';
import Card from 'components/card/Card';

const Similar = (props) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const getList = async () => {
			let response = null;
			const params = {};

			if (props.type !== 'similar') {
				switch (props.category) {
					case category.movie:
						response = await tmdbApi.getMoviesList(props.type, {
							params
						});
						break;
					default:
						response = await tmdbApi.getTvList(props.type, {
							params
						});
				}
			} else {
				response = await tmdbApi.similar(props.category, props.id);
			}
			setItems(response.results);
		};
		getList();
	}, []);

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 5
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 4
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 3
		}
	};

	return (
		<div className='movie-list'>
			<Carousel responsive={responsive} infinite>
				{items.map((item, key) => (
					<Card key={key} movie={item} />
				))}
			</Carousel>
		</div>
	);
};

export default Similar;
