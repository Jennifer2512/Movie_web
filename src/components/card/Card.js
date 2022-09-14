import apiConfig from 'api/apiConfig';
import React, { useState } from 'react';
import './Card.scss';
import error from 'assets/icon/error.png';

function Card({ movie }) {
	return (
		<div className='card' id='card'>
			<img
				className='card__img'
				src={apiConfig.originalImage(movie.poster_path) || error}
				alt='error img'
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
				<button className='card__detail-btn button-6'>Watch now</button>
			</div>
		</div>
	);
}

export default Card;
