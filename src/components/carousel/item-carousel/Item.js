import React from 'react';
import { Link } from 'react-router-dom';
import './Item.scss';

function Item({ title, decs, video, link }) {
	return (
		<div className='item-movie'>
			<span className='bg'></span>
			<video autoPlay loop muted className='trailer'>
				<source src={video} type='video/mp4' />
			</video>
			<div className='pre-detail'>
				<h1 className='title'>{title}</h1>
				<div className='decs'>{decs}</div>
				<div className='btn-crs'>
					<button className='btn-watch'>
						<Link to={link}>
							<i
								className='fa fa-play fa-fw'
								aria-hidden='true'
							></i>
							Watch now
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Item;
