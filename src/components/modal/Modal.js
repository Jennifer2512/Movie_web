import React from 'react';
import './Modal.scss';
import apiConfig from '../../api/apiConfig';

export default function Modal({ movie }) {

	return (
		<div className='modalMovie'>
			<img
				className='modalMovie__img'
				src={apiConfig.originalImage(movie.poster_path)}
				alt='image movie'
			/>
			<div className='modalMovie__detail'>
				<span className='modalMovie__detail-vote'>
					Vote: {movie.vote_average}
					<i class='fa fa-star fa-fw' aria-hidden='true'></i>
				</span>
				<h5 className='modalMovie__detail-ttl'>{movie.title}</h5>
				<p className='modalMovie__detail-decs line-clamp'>
					{movie.overview}
				</p>
				<button className='modalMovie__detail-btn button-6'>
					Watch now
				</button>
			</div>
		</div>
	);
}
