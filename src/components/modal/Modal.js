import React from 'react';
import './Modal.scss';
import apiConfig from '../../api/apiConfig';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function Modal({ movie }) {
	const renderTooltip = (props) => (
		<Tooltip id='button-tooltip' {...props} className='tooltipModal'>
			<div className='tooltipModal__item'>
				{/* <img
					className='modalMovie__img'
					src={apiConfig.originalImage(movie.poster_path)}
					alt='image movie'
				/> */}
				<p className='modalMovie__title'>{movie.title}</p>
			</div>
		</Tooltip>
	);

	return (
		<OverlayTrigger
			placement='right'
			delay={{ show: 250, hide: 100 }}
			overlay={renderTooltip}
		>
			<div className='modalMovie'>
				<img
					className='modalMovie__img'
					src={apiConfig.originalImage(movie.poster_path)}
					alt='image movie'
				/>
			</div>
		</OverlayTrigger>
	);
}
