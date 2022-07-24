import React, { useEffect, useState } from 'react';
import './home.scss';
import tmdbApi, { category, movieType } from 'api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import Modal from 'components/modal/Modal';

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
				setMovieItems(response.results.slice(1, 5));
			} catch {
				console.log('error');
			}
		};
		getMovies();
	}, []);

	console.log('www', movieItems);

	return (
		<div className="home">
			{movieItems.map((movie, key) => (
				<Modal key={key} movie={movie} />
			))}
		</div>
	);
}

export default Home;
