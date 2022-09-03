import React, { useEffect, useState } from 'react';
import './home.scss';
import tmdbApi, { movieType } from 'api/tmdbApi';
import Modal from 'components/modal/Modal';
import ControlledCarousel from 'components/carousel/Carousel';

function Home() {
	const [movieItems, setMovieItems] = useState([]);

	useEffect(() => {
		const getMovies = async () => {
			const params = { page: 1 };
			try {
				const response = await tmdbApi.getMoviesList(
					movieType.popular,
					{ params }
				);
				setMovieItems(response.results);
			} catch {
				console.log('error');
			}
		};
		getMovies();
	}, []);

	return (
		<>
			<ControlledCarousel />
			<div className='home'>
				{movieItems.map((movie, key) => (
					<Modal key={key} movie={movie} />
				))}
			</div>
		</>
	);
}

export default Home;
