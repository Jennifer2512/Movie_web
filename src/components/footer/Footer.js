import React from 'react';
import bgFooter from 'assets/images/footer.jpg';
import './Footer.scss';
import { Link, useLocation } from 'react-router-dom';

function Footer() {
	const location = useLocation();

	return (
		<div
			className={`footer ${
				location.pathname == '/contact' ? 'd-none' : 'd-block'
			}`}
		>
			<div className="wrap-footer">
				<div className="top-footer d-flex">
					<div>
						<h5>Information</h5>
						<div className="section-footer">
							<Link to="/">Image Licenses</Link>
							<Link to="/">Contact us</Link>
							<Link to="/">Our Authors</Link>
						</div>
					</div>
					<div>
						<h5>Discover</h5>
						<div className="section-footer">
							<Link to="/">All Reviews</Link>
							<Link to="/">Author Picks</Link>
							<Link to="/">New Reviews</Link>
						</div>
					</div>
					<div>
						<h5>Community</h5>
						<div className="section-footer">
							<a href="https://www.facebook.com/jenifer2512/">
								<i
									className="fa fa-facebook-official"
									aria-hidden="true"
								></i>
								&emsp;Facebook
							</a>
							<a href="https://github.com/Jennifer2512">
								<i
									className="fa fa-github"
									aria-hidden="true"
								></i>
								&emsp;Github
							</a>
							<a href="#">
								<i
									className="fa fa-envelope-o"
									aria-hidden="true"
								></i>
								&emsp;Nvy0128@gmail.com
							</a>
						</div>
					</div>
				</div>
				<div className="botom-footer">
					Copyright © Movie ReviewsTemplate design by{' '}
					<a href="#">Studio Corvus</a> - Powerd by{' '}
					<a href="#">Webflow</a> <a href="#">Image Licensing Info</a>
				</div>
			</div>
			<img className="BG" src={bgFooter} />
		</div>
	);
}

export default Footer;
