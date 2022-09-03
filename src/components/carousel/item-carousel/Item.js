import React from 'react';
import './Item.scss';

function Item({ title, decs, video }) {
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
						<a href='#'>
							<i
								className='fa fa-play fa-fw'
								aria-hidden='true'
							></i>
							Watch now
						</a>
					</button>
					<button className='info'>
						<span className='fa-stack fa-lg'>
							<i className='fa fa-circle-thin fa-stack-2x'></i>
							<i className='fa fa-info' aria-hidden='true'></i>
						</span>
						More Info
					</button>
				</div>
			</div>
		</div>
	);
}

export default Item;
