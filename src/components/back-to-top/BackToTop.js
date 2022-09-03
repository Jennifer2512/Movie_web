import React, { useEffect, useState } from 'react';
import './BackToTop.scss';

const BackToTop = () => {
	const [showScroll, setShowScroll] = useState(false);

	const handleScrollShowBackToTop = () => {
		if (window.pageYOffset > 750) {
			setShowScroll(true);
		} else {
			setShowScroll(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScrollShowBackToTop);
		return () => {
			window.removeEventListener('scroll', handleScrollShowBackToTop);
		};
	}, []);

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<div className={showScroll ? 'd-block' : 'd-none'}>
			<button className='btn' href='#' onClick={scrollTop}>
				<i className='fa fa-angle-up' aria-hidden='true' />
			</button>
		</div>
	);
};

export default BackToTop;
