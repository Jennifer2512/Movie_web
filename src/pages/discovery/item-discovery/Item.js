import React, { useEffect, useState } from 'react';
import MV from 'assets/icon/top-rate.png';
import TV from 'assets/icon/tv-popular.png';
import Card from 'components/card/Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import tmdbApi, { movieType, tvType } from 'api/tmdbApi';

function Item() {
	const [movieList, setMovieList] = useState([]);
	const [tvList, setTvList] = useState([]);
	const [loading, setLoading] = useState(true);

	const getMovies = async () => {
		const params = { page: 1 };
		try {
			const response = await tmdbApi.getMoviesList(movieType.top_rated, {
				params
			});
			setMovieList(response.results);
			setLoading(false);
		} catch {
			console.log('error');
		}
	};
	const getTvList = async () => {
		const params = { page: 1 };
		try {
			const response = await tmdbApi.getTvList(tvType.popular, {
				params
			});
			setTvList(response.results);
			setLoading(false);
		} catch {
			console.log('error');
		}
	};

	useEffect(() => {
		getMovies();
		getTvList();
	}, []);

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 4
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
		<>
			{loading ? (
				<div className='bars-7'></div>
			) : (
				<>
					<div className='discovery__item'>
						<h2 className='discovery__ttl'>
							<img src={MV} />
							Top Movies
							<hr />
						</h2>
						<Carousel
							itemClass='image-item'
							responsive={responsive}
							infinite
						>
							{movieList.map((movie, key) => (
								<Card key={key} movie={movie} />
							))}
						</Carousel>
					</div>

					<div className='discovery__item'>
						<h2 className='discovery__ttl'>
							<img src={TV} />
							Top TV Popular
							<hr />
						</h2>
						<Carousel
							itemClass='image-item'
							responsive={responsive}
							infinite
						>
							{tvList.map((tv, key) => (
								<Card key={key} movie={tv} />
							))}
						</Carousel>
					</div>
				</>
			)}
		</>
	);
}

export default Item;
