import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Header from 'components/header/Header';

const Layout = () => {
	return (
		<div className='l-layout'>
			<Header />
			<main className='l-main box-padding'>
				<Outlet />
			</main>
		</div>
	);
};
Layout.propTypes = {
	children: PropTypes.any
};
export default Layout;
