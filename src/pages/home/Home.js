import React, { useEffect, useState } from 'react';
import './home.scss';
import tmdbApi, { category, movieType } from 'api/tmdbApi';
import Modal from 'components/modal/Modal';
import ControlledCarousel from 'components/carousel/Carousel';
import NotFound from 'components/404/NotFound';
import { useLocation } from 'react-router-dom';

const Home = () => {
	const [keyword, setKeyword] = useState('');
	const [loading, setLoading] = useState(false);
	const [items, setItems] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPage, setTotalPage] = useState(0);
	let response = null;
	const location = useLocation();

	useEffect(() => {
		setTimeout(() => {
			setLoading(true);
		}, 2000);
	}, []);

	const goToSearch = async () => {
		const params = {
			query: keyword
		};
		response = await tmdbApi.search('movie', { params });
		setItems(response.results);
		setTotalPage(response.total_pages);
		window.history.pushState(
			(location.pathname = `/search/${keyword}`),
			'',
			`/search/${keyword}`
		);
	};

	const getList = async () => {
		const params = {};
		response = await tmdbApi.getMoviesList(movieType.upcoming, {
			params
		});
		setKeyword('');
		setItems(response.results);
		setTotalPage(response.total_pages);
	};
	useEffect(() => {
		if (location.pathname == '/') {
			getList();
		}
	}, [location.pathname]);

	const loadMore = async () => {
		let response = null;
		if (keyword === '') {
			const params = {
				page: page + 1
			};
			response = await tmdbApi.getMoviesList(movieType.upcoming, {
				params
			});
		} else {
			const params = {
				page: page + 1,
				query: keyword
			};
			response = await tmdbApi.search('movie', { params });
		}
		setItems([...items, ...response.results]);
		setPage(page + 1);
	};

	useEffect(() => {
		const enterEvent = (e) => {
			e.preventDefault();
			if (e.keyCode === 13) {
				goToSearch();
			}
		};
		document.addEventListener('keyup', enterEvent);
		return () => {
			document.removeEventListener('keyup', enterEvent);
		};
	}, [goToSearch]);
	return (
		<>
			{!loading ? (
				<div className='bars-7'></div>
			) : (
				<>
					<ControlledCarousel />
					<div className='home'>
						<div className='home-search'>
							<input
								type='text'
								placeholder='Search...'
								value={keyword}
								onChange={(e) => setKeyword(e.target.value)}
							/>
							<button
								className='home-search__btn'
								onClick={goToSearch}
							></button>
						</div>
						<div>
							{items.length > 0 ? (
								<>
									<div className='home-content'>
										{items.map((item, i) => (
											<Modal
												movie={item}
												key={i}
												category={category.movie}
											/>
										))}
									</div>
									{page < totalPage ? (
										<div className='home-loadmore'>
											<button onClick={loadMore}>
												Load more
											</button>
										</div>
									) : null}
								</>
							) : (
								<NotFound />
							)}
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Home;
