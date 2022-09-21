import React from 'react';
import bgFooter from 'assets/images/footer.jpg';
import './Footer.scss';
import { Link, useLocation } from 'react-router-dom';
import BackToTop from 'components/back-to-top/BackToTop';
import routes from 'routes/itemNav';

function Footer() {
	return (
		<div className='footer'>
			<BackToTop />
			<div className='wrap-footer'>
				<div className='top-footer d-flex'>
					<div>
						<div className='section-footer'>
							{routes.map((val, key) => {
								return (
									<Link key={key} to={val.path}>
										<img src={val.icon} />
										&emsp;
										{val.title}
									</Link>
								);
							})}
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
								<i className='fa fa-at' aria-hidden='true'></i>
								&emsp;nvy0128@gmail.com
							</a>
						</div>
					</div>
				</div>
			</div>
			<img className='BG' src={bgFooter} />
		</div>
	);
}

export default Footer;
