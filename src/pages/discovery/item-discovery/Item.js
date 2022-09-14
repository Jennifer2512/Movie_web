import React, { useEffect, useState } from 'react';
import MV from 'assets/icon/top-rate.png';
import TV from 'assets/icon/tv-popular.png';
import Card from 'components/card/Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import tmdbApi, { movieType, tvType } from 'api/tmdbApi';

function Item() {
	const [upcoming, setUpcoming] = useState([]);
	const [popular, setPopular] = useState([]);
	const [topRated, setTopRated] = useState([]);
	const [tvPopular, setTvPopular] = useState([]);
	const [tvTopRated, setTvTopRated] = useState([]);
	const [tvOnAir, setTvOnAir] = useState([]);
	const [loading, setLoading] = useState(true);

	const getList = async () => {
		const params = { page: Math.floor(Math.random() * 4) + 1 };
		try {
			//MOVIE
			const resUp = await tmdbApi.getMoviesList(movieType.upcoming, {
				params
			});
			const resPopular = await tmdbApi.getMoviesList(movieType.popular, {
				params
			});
			const resTop = await tmdbApi.getMoviesList(movieType.top_rated, {
				params
			});
			setUpcoming(resUp.results);
			setPopular(resPopular.results);
			setTopRated(resTop.results);
			//TV
			const resTvPopular = await tmdbApi.getTvList(tvType.popular, {
				params
			});
			const resTvTop = await tmdbApi.getTvList(tvType.top_rated, {
				params
			});
			const resTvOn = await tmdbApi.getTvList(tvType.on_the_air, {
				params
			});
			setTvPopular(resTvPopular.results);
			setTvTopRated(resTvTop.results);
			setTvOnAir(resTvOn.results);
			//LOADING
			setLoading(false);
		} catch {
			console.log('error');
		}
	};
	console.log(tvOnAir);
	useEffect(() => {
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
		<>
			{loading ? (
				<div className='bars-7'></div>
			) : (
				<>
					<div className='discovery__item'>
						<h3 className='discovery__ttl'>
							<img src={MV} />
							Upcoming Movie
							<hr />
						</h3>
						<Carousel
							itemClass='image-item'
							responsive={responsive}
							infinite
						>
							{upcoming.map((movie, key) => (
								<Card key={key} movie={movie} />
							))}
						</Carousel>
					</div>
					<div className='discovery__item'>
						<h3 className='discovery__ttl'>
							<img src={MV} />
							Top Popular Movie
							<hr />
						</h3>
						<Carousel
							itemClass='image-item'
							responsive={responsive}
							infinite
						>
							{popular.map((movie, key) => (
								<Card key={key} movie={movie} />
							))}
						</Carousel>
					</div>
					<div className='discovery__item'>
						<h3 className='discovery__ttl'>
							<img src={MV} />
							Top Rated Movie
							<hr />
						</h3>
						<Carousel
							itemClass='image-item'
							responsive={responsive}
							infinite
						>
							{topRated.map((movie, key) => (
								<Card key={key} movie={movie} />
							))}
						</Carousel>
					</div>

					<div className='discovery__item'>
						<h3 className='discovery__ttl'>
							<img src={TV} />
							Top Popular TV
							<hr />
						</h3>
						<Carousel
							itemClass='image-item'
							responsive={responsive}
							infinite
						>
							{tvPopular.map((tv, key) => (
								<Card key={key} movie={tv} />
							))}
						</Carousel>
					</div>
					<div className='discovery__item'>
						<h3 className='discovery__ttl'>
							<img src={TV} />
							Top Rated TV
							<hr />
						</h3>
						<Carousel
							itemClass='image-item'
							responsive={responsive}
							infinite
						>
							{tvTopRated.map((tv, key) => (
								<Card key={key} movie={tv} />
							))}
						</Carousel>
					</div>
					<div className='discovery__item'>
						<h3 className='discovery__ttl'>
							<img src={TV} />
							On The Air TV
							<hr />
						</h3>
						<Carousel
							itemClass='image-item'
							responsive={responsive}
							infinite
						>
							{tvOnAir.map((tv, key) => (
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
