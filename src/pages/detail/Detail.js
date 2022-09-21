import apiConfig from 'api/apiConfig';
import tmdbApi, { category } from 'api/tmdbApi';
import CastList from 'components/cast-list/CastList';
import Similar from 'components/similar/Similar';
import VideoList from 'components/video-list/VideoList';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Detail.scss';
import back from 'assets/icon/back.png';

function Detail() {
	const { id } = useParams();
	const [item, setItem] = useState(null);
	const navigate = useNavigate();
	useEffect(() => {
		const getDetail = async () => {
			const response = await tmdbApi.detail(category.movie, id, {
				params: {}
			});
			setItem(response);
			window.scrollTo(0, 0);
		};
		getDetail();
	}, [id]);

	return (
		<>
			{item && (
				<>
					<div
						className='banner'
						style={{
							backgroundImage: `url(${apiConfig.originalImage(
								item.backdrop_path || item.poster_path
							)})`
						}}
					>
						<button
							className='banner__btn'
							onClick={() => navigate('/')}
						>
							<img src={back} width={40} height={40} />
							&ensp;
							<span>Home</span>
						</button>
					</div>
					<div className='mb-3 movie-content container'>
						<div className='movie-content__poster'>
							<div
								className='movie-content__poster__img'
								style={{
									backgroundImage: `url(${apiConfig.originalImage(
										item.poster_path || item.backdrop_path
									)})`
								}}
							></div>
						</div>
						<div className='movie-content__info'>
							<h1 className='title'>{item.title || item.name}</h1>
							<div className='genres'>
								{item.genres &&
									item.genres.slice(0, 5).map((genre, i) => (
										<span key={i} className='genres__item'>
											{genre.name}
										</span>
									))}
							</div>
							<p className='overview'>{item.overview}</p>
							<div className='cast'>
								<div className='section__header'>
									<h2>Casts</h2>
								</div>
								<CastList id={item.id} />
							</div>
						</div>
					</div>
					<div className='container'>
						<div className='section mb-3'>
							<VideoList id={item.id} />
						</div>
						<div className='section mb-3'>
							<div className='section__header mb-2'>
								<h2>Maybe you like</h2>
							</div>
							<Similar
								category={category.movie}
								type='similar'
								id={item.id}
							/>
						</div>
					</div>
				</>
			)}
		</>
	);
}

export default Detail;
