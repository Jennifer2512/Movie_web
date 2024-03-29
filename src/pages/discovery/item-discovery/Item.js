import React, { useEffect, useState } from 'react';
import MV from 'assets/icon/top-rate.png';
import TV from 'assets/icon/tv-popular.png';
import Card from 'components/card/Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import tmdbApi, { category, movieType, tvType } from 'api/tmdbApi';

function Item() {
	const [upcoming, setUpcoming] = useState([]);
	const [popular, setPopular] = useState([]);
	const [topRated, setTopRated] = useState([]);
	const [tvPopular, setTvPopular] = useState([]);
	const [tvTopRated, setTvTopRated] = useState([]);
	const [tvOnAir, setTvOnAir] = useState([]);
	const [loading, setLoading] = useState(true);

	const getList = async () => {
		const params = { page: 1 };
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
					{/* MOVIE */}
					<div className='discovery__item'>
						<h3 className='discovery__ttl'>
							<img src={MV} />
							Upcoming Movie
							<hr />
						</h3>
						<Carousel responsive={responsive} infinite autoPlay>
							{upcoming.map((movie, key) => (
								<Card
									key={key}
									movie={movie}
									category={category.movie}
								/>
							))}
						</Carousel>
					</div>
					<div className='discovery__item'>
						<h3 className='discovery__ttl'>
							<img src={MV} />
							Top Popular Movie
							<hr />
						</h3>
						<Carousel responsive={responsive} infinite autoPlay>
							{popular.map((movie, key) => (
								<Card
									key={key}
									movie={movie}
									category={category.movie}
								/>
							))}
						</Carousel>
					</div>
					<div className='discovery__item'>
						<h3 className='discovery__ttl'>
							<img src={MV} />
							Top Rated Movie
							<hr />
						</h3>
						<Carousel responsive={responsive} infinite autoPlay>
							{topRated.map((movie, key) => (
								<Card
									key={key}
									movie={movie}
									category={category.movie}
								/>
							))}
						</Carousel>
					</div>

					{/* TV */}
					<div className='discovery__item'>
						<h3 className='discovery__ttl'>
							<img src={TV} />
							Top Popular TV
							<hr />
						</h3>
						<Carousel responsive={responsive} infinite autoPlay>
							{tvPopular.map((tv, key) => (
								<Card
									key={key}
									movie={tv}
									category={category.tv}
								/>
							))}
						</Carousel>
					</div>
					<div className='discovery__item'>
						<h3 className='discovery__ttl'>
							<img src={TV} />
							Top Rated TV
							<hr />
						</h3>
						<Carousel responsive={responsive} infinite autoPlay>
							{tvTopRated.map((tv, key) => (
								<Card
									key={key}
									movie={tv}
									category={category.tv}
								/>
							))}
						</Carousel>
					</div>
					<div className='discovery__item'>
						<h3 className='discovery__ttl'>
							<img src={TV} />
							On The Air TV
							<hr />
						</h3>
						<Carousel responsive={responsive} infinite autoPlay>
							{tvOnAir.map((tv, key) => (
								<Card
									key={key}
									movie={tv}
									category={category.tv}
								/>
							))}
						</Carousel>
					</div>
				</>
			)}
		</>
	);
}

export default Item;
