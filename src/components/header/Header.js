import React, { useState, useEffect } from 'react';
import TV from 'assets/icon/TV.svg';
import './Header.scss';
import { Link, useLocation } from 'react-router-dom';
import routes from 'routes';

const Header = () => {
	const location = useLocation();
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		const onScroll = () => setOffset(window.pageYOffset);
		window.removeEventListener('scroll', onScroll);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		if (window.pageYOffset > 100) {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}, [location.pathname]);

	return (
		<>
			<div
				className={`${
					offset > 700 ||
					location.pathname == '/discovery' ||
					location.pathname == '/contact'
						? 'header sticky-top'
						: 'none'
				}`}
			>
				<Link className='logo text-white' to='/'>
					<img className='imgLG' src={TV} />
					<b>&nbsp;Your</b>
					<p>Movie</p>
				</Link>
				<div className='nav-menu'>
					{routes.map((val, key) => {
						return (
							<Link
								key={key}
								to={val.path}
								className={`textCl ${
									location.pathname == val.path
										? 'active'
										: ''
								}`}
							>
								<div>{val.title}</div>
							</Link>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Header;
