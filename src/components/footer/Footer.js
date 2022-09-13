import React from 'react';
import bgFooter from 'assets/images/footer.jpg';
import './Footer.scss';
import { Link, useLocation } from 'react-router-dom';
import BackToTop from 'components/back-to-top/BackToTop';

function Footer() {
	const location = useLocation();

	return (
		<div className='footer'>
			<BackToTop />
			<div className='wrap-footer'>
				<div className='top-footer d-flex'>
					<div>
						<div className='section-footer'>
							<Link to='/'>Home</Link>
							<Link to='/discovery'>Discovery</Link>
							<Link to='/contact'>Contact us</Link>
						</div>
					</div>
					<div>
						<div className='section-footer'>
							<a href='https://www.facebook.com/vy251220/'>
								<i
									className='fa fa-facebook-official'
									aria-hidden='true'
								></i>
								&emsp;Facebook
							</a>
							<a href='https://github.com/Jennifer2512'>
								<i
									className='fa fa-github'
									aria-hidden='true'
								></i>
								&emsp;Github
							</a>
							<a href='#'>
								<i
									className='fa fa-envelope-o'
									aria-hidden='true'
								></i>
								&emsp;nvy0128@gmail.com
							</a>
						</div>
					</div>
				</div>
				<div className='botom-footer'>
					Copyright © Movie ReviewsTemplate design by{' '}
					<a href='#'>Studio Corvus</a> - Powerd by{' '}
					<a href='#'>Webflow</a> <a href='#'>Image Licensing Info</a>
				</div>
			</div>
			<img className='BG' src={bgFooter} />
		</div>
	);
}

export default Footer;
