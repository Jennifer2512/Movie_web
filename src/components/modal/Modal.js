import React from 'react';
import './Modal.scss';
import apiConfig from '../../api/apiConfig';
import errorImg from 'assets/icon/error.png';
import { Link } from 'react-router-dom';

export default function Modal({ movie, category }) {
	const link = 'detail' + '/' + category + '/' + movie.id;
	return (
		<div className='modalMovie'>
			<img
				className='modalMovie__img'
				src={apiConfig.originalImage(movie.poster_path)}
				onError={(e) => (
					(e.target.onerror = null), (e.target.src = errorImg)
				)}
				alt='image movie'
			/>
			<div className='modalMovie__detail'>
				<span className='modalMovie__detail-vote'>
					Vote: {movie.vote_average}
					<i className='fa fa-star fa-fw' aria-hidden='true'></i>
				</span>
				<h5 className='modalMovie__detail-ttl'>{movie.title}</h5>
				<p className='modalMovie__detail-decs line-clamp'>
					{movie.overview}
				</p>
				<button className='modalMovie__detail-btn button-6'>
					<Link to={link}>Watch now</Link>
				</button>
			</div>
		</div>
	);
}
