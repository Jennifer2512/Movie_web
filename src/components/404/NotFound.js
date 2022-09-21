import React from 'react';
import notfound from 'assets/images/404/main.svg';
import ass1 from 'assets/images/404/kinhkhicau.svg';
import ass2 from 'assets/images/404/may.svg';
import './NotFound.scss';

function NotFound() {
	return (
		<div className='container'>
			<div className='not-found'>
				<img className='404' src={notfound} width='400' height='400' />
				<img className='ass1' src={ass1} width='200' height='200' />
				<img className='ass2' src={ass2} width='40' height='40' />
			</div>
		</div>
	);
}

export default NotFound;
