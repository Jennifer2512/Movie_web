import React, { useState, useEffect, useRef } from 'react';
import TV from 'assets/icon/TV.svg';
import './Header.scss';
import { Link, useLocation } from 'react-router-dom';
import routes from 'routes/itemNav';

const Header = () => {
	const location = useLocation();
	const [offset, setOffset] = useState(0);
	const { ref, isComponentVisible, setIsComponentVisible } =
		useComponentVisible(true);

	useEffect(() => {
		const onScroll = () => setOffset(window.pageYOffset);
		window.removeEventListener('scroll', onScroll);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		if (window.pageYOffset > 100 && !location.pathname.includes('search')) {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}, [location.pathname]);

	return (
		<div
			id='header'
			className={`${
				offset < 600 &&
				(location.pathname == '/' ||
					location.pathname.includes('/search/'))
					? 'none'
					: 'header-wrap sticky-top'
			}`}
		>
			<div className='container header'>
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

				<div className='headerMB'>
					<i
						className='fa fa-bars'
						aria-hidden='true'
						ref={ref}
						onClick={() =>
							setIsComponentVisible(!isComponentVisible)
						}
					></i>
				</div>
			</div>
			{isComponentVisible && (
				<div className='nav-menuMB'>
					<div className='nav-menuMB__item'>
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
									<img src={val.icon} />
									{val.title}
								</Link>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
};
export default Header;

function useComponentVisible() {
	const [isComponentVisible, setIsComponentVisible] = useState(false);
	const ref = useRef(null);
	const handleHideDropdown = (event) => {
		if (event.key === 'Escape') {
			setIsComponentVisible(false);
		}
	};
	const handleClickOutside = (event) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsComponentVisible(false);
		}
	};

	useEffect(() => {
		document.addEventListener('keydown', handleHideDropdown, true);
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('keydown', handleHideDropdown, true);
			document.removeEventListener('click', handleClickOutside, true);
		};
	});
	return { ref, isComponentVisible, setIsComponentVisible };
}
