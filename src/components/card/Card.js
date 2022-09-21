import apiConfig from 'api/apiConfig';
import React from 'react';
import './Card.scss';
import errorImg from 'assets/icon/error.png';
import { Link } from 'react-router-dom';

function Card({ movie, category }) {
	const link = '/' + 'detail' + '/' + category + '/' + movie.id;
	return (
		<div className='card' id='card'>
			<img
				className='card__img'
				src={apiConfig.originalImage(movie.poster_path)}
				onError={(e) => (
					(e.target.onerror = null), (e.target.src = errorImg)
				)}
			/>
			<div className='card__detail'>
				<span className='card__detail-vote'>
					Vote: {movie.vote_average}
					<i className='fa fa-star fa-fw' aria-hidden='true'></i>
				</span>
				<h5 className='card__detail-ttl'>
					{movie.title}
					{movie.name}
				</h5>
				<p className='card__detail-decs line-clamp'>{movie.overview}</p>
				<button className='card__detail-btn button-6'>
					<Link to={link}>Watch now</Link>
				</button>
			</div>
		</div>
	);
}

export default Card;
