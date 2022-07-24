import React from 'react';
import './Modal.scss';

export default function Modal({ movie }) {
	return (
		<div className="container">
			<img
				src={apiConfig.originalImage(movie.poster_path)}
				alt="image movie"
				className="image"
			/>
			<p>{movie.title}</p>
			<div className="overlay">
				<div className="text">Hello World</div>
			</div>
		</div>
	);
}
